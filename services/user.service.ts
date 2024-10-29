import axios, { AxiosRequestConfig } from "axios";
import { config } from "../config/config";
import { Result } from "../models/result.model";
import { mapToInvitation, mapToResult } from "../mappers/user.mapper";
import * as UserRepository from "../repository/user.repository";
import { NawaiamError } from "../exception/nawaiam-error";
import { convertToBase64 } from "../auth/auth";

export const sendInvitation = async (body: any) => {
  try {
    console.info(`Invitation Input ${JSON.stringify(body)}`);
    const options: AxiosRequestConfig = {
      baseURL: config.nawaiam.baseUrl,
      url: config.nawaiam.invitationUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": convertToBase64(
          `${config.nawaiam.clientId}:${config.nawaiam.clientSecret}`
        ),
      },
      data: mapToInvitation(body),
    };

    console.info(
      `Making request with this options: ${JSON.stringify(options)}`
    );

    const { data } = await axios(options);
    console.info(
      `Invitation response for user ${body.billing.email}: ${JSON.stringify(
        data
      )}`
    );
    return data;
  } catch (error) {
    throw new NawaiamError({
      code: error.response.status,
      message: error.response.data,
    });
  }
};

export const saveResult = async (newResult: any) => {
  try {
    console.info("Webhook Input", newResult);
    const email = newResult.user.email;
    console.info(`Saving result for user ${email}`);

    const result = await UserRepository.findByEmail(email);

    if (result) {
      console.info(`Updating user ${email}`);
      mapToResult(result, newResult);
      result.updatedAt = new Date();
      await UserRepository.update(result);
    } else {
      console.info(`Creating new user ${email}`);
      const resultToSave = mapResultToEntity(newResult);
      await UserRepository.save(resultToSave);
    }
    return {
      status: "Result saved OK",
    };
  } catch (error) {
    console.error("Error webhook", error);
    throw error;
  }
};
const mapResultToEntity = (newResult: any) => {
  const result = new Result();
  mapToResult(result, newResult);
  result.createdAt = new Date();
  result.updatedAt = new Date();

  return result;
};

export const getResults = async () => {
  return Result.find();
};
