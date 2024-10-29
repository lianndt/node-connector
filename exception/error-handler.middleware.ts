import { NextFunction, Request, Response } from "express";
import { CustomError } from "./custom-error";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Error Handler:", error);
  if (error instanceof CustomError) {
    return res.status(error.codigo).json(error.serializeErrors());
  }

  return res.status(500).json({ status: 500, message: "Algo salio mal" });
};
