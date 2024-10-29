import request from "supertest";
import app from "../app";
import { send, findByEmail, save, update, validateNoParam } from "./mocks";
import * as UserService from "../services/user.service";
import * as UserRepository from "../repository/user.repository";
import * as auth from "../auth/auth";
import { NextFunction } from "express";

jest.mock("../auth/validate-ip", () => jest.fn((req, res, next) => next()));

beforeAll(() => {
  const sendInvitationMock = jest.spyOn(UserService, "sendInvitation");
  sendInvitationMock.mockImplementation(send);

  const mock = jest.spyOn(UserRepository, "findByEmail");
  mock.mockImplementation(findByEmail);

  const mock2 = jest.spyOn(UserRepository, "save");
  mock2.mockImplementation(save);

  const mock3 = jest.spyOn(UserRepository, "update");
  mock3.mockImplementation(update);
});

describe("Send Invitation", () => {
  it("should return status 400 when sending invitation with undefined body", async () => {
    const response = await request(app).post("/api/user/invitation").send({});
    expect(response.statusCode).toBe(400);
  });

  it("should return status 400 when sending invitation with undefined email", async () => {
    const response = await request(app)
      .post("/api/user/invitation")
      .send({
        billing: {
          email: null,
        },
      });
    expect(response.statusCode).toBe(400);
  });

  it("should return status 400 when sending invitation with wrong status", async () => {
    const response = await request(app)
      .post("/api/user/invitation")
      .send({ status: "wrong status", billing: { email: "sdsd@sds.com" } });
    expect(response.statusCode).toBe(400);
  });

  it("should return status 200 when sending invitation with completed status", async () => {
    const response = await request(app)
      .post("/api/user/invitation")
      .send({ status: "completed", billing: { email: "sdsd@sds.com" } });
    expect(response.statusCode).toBe(200);
  });

  it("should return status 200 when sending invitation with processing status", async () => {
    const response = await request(app)
      .post("/api/user/invitation")
      .send({ status: "processing", billing: { email: "sdsd@sds.com" } });
    expect(response.statusCode).toBe(200);
  });
});

describe("Save Result", () => {
  it("should return status 200 when saving an existing email to DB", async () => {
    const response = await request(app)
      .post("/api/user/webhook/result")
      .send({
        user: {
          email: "test@ok.com",
        },
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "Result saved OK",
    });
    expect(findByEmail).toBeCalled();
    expect(update).toBeCalled();
  });

  it("should return status 200 when saving a new email to DB", async () => {
    const response = await request(app)
      .post("/api/user/webhook/result")
      .send({
        user: {
          email: "testnew@ok.com",
        },
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "Result saved OK",
    });
    expect(findByEmail).toBeCalled();
    expect(save).toBeCalled();
  });

  it("should return status 400 when receiving result with undefined email", async () => {
    const response = await request(app)
      .post("/api/user/webhook/result")
      .send({
        user: {
          email: null,
        },
      });
    expect(response.statusCode).toBe(400);
  });
});
