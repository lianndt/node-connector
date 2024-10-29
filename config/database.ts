import { DataSource } from "typeorm";
import { Result } from "../models/result.model";
import { config } from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.database.host,
  port: parseInt(config.database.port),
  username: config.database.username,
  password: config.database.password,
  database: config.database.database,
  entities: [Result],
  logging: true,
  synchronize: config.database.sync == "true" ? true : false,
});
