import express from "express";
import cors from "cors";
import logger from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { userRouter } from "./routes/user.routes";
import { errorHandler } from "./exception/error-handler.middleware";
import { options } from "./routes/swagger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use("/api", userRouter);
app.use(errorHandler);
const specs = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.get("/health", (req, res, next) => {
  return res.json({
    status: "OK",
  });
});

export default app;
