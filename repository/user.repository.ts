import { Result } from "../models/result.model";

export const findByEmail = async (email: string) => {
  return Result.findOneBy({
    userEmail: email,
  });
};

export const update = async (result: Result) => {
  return Result.update({ id: result.id }, result);
};

export const save = async (result: Result) => {
  return result.save();
};
