import { config } from "../config/config";

export const convertToBase64 = (data: string) => {
  return Buffer.from(data).toString("base64");
};

export const convertFromBase64 = (data: string) => {
  return Buffer.from(data, "base64").toString("utf-8");
};
