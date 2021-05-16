import express from "express";
import "reflect-metadata";
import { useGraphQL } from "./apollo";

const app = express();
const port = process.env.PORT || 3333;

const init = async () => {
  await useGraphQL(app);
  app.listen(port, () =>
    console.log(`🔥 Server is running on http://localhost:${port}/graphql`)
  );
};

init();
