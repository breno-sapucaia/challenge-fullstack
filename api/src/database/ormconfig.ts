import path from "path";
import { ConnectionOptions } from "typeorm";

const mongoConfig: ConnectionOptions = {
  type: "mongodb",
  name: "mongodb",
  host: "localhost",
  port: 27017,
  username: "admin",
  password: "admin",
  database: "books-database",
  entities: [path.join(__dirname, "..", "schemas", "*.{ts,js}")],
  migrations: [path.join(__dirname, "migrations", "**", "*.{ts,js}")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "schemas"),
    migrationsDir: path.join(__dirname, "migrations"),
  },
};

export = mongoConfig;
