import { nextDay } from "date-fns";

export const send = jest.fn().mockImplementation(async (body: any) => {
  return Promise.resolve({});
});

export const findByEmail = jest
  .fn()
  .mockImplementation(async (email: string) => {
    if (email == "test@ok.com") {
      return Promise.resolve({
        result: {
          id: 1,
        },
      });
    } else {
      return Promise.resolve(undefined);
    }
  });

export const save = jest.fn().mockImplementation(async (body: any) => {
  return Promise.resolve({});
});

export const update = jest.fn().mockImplementation(async (body: any) => {
  return Promise.resolve({});
});

export const validateNoParam = jest
  .fn()
  .mockImplementation(async (req, res, next) => {
    next();
  });
