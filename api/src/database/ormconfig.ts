import { ConnectionOptions } from "typeorm";

const mongoConfig: ConnectionOptions = {
  type: "mongodb",
  name: "mongodb",
  // url: `mongodb://foton:mecontrata@localhost:9999/database-book?authSource=admin`,
  username: "foton",
  password: "mecontrata",
  database: "database-book",
  useNewUrlParser: true,
  connectTimeoutMS: 3600000,
  socketTimeoutMS: 3600000,
  port: 9999,
  host: "localhost",
  authSource: "admin",
  entities: ["./src/schemas/**/*.{ts,js}"],
  migrations: ["./src/database/migrations/**/*.{ts,js}"],
  cli: {
    entitiesDir: "./src/schemas",
    migrationsDir: "./src/database/migrations",
  },
};

export = mongoConfig;
