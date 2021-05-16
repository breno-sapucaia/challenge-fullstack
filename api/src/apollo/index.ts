import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import { buildSchema } from "type-graphql";
import Container from "typedi";
import { createConnectionUsing, EnumConnections } from "../database/connection";
import { BookResolver } from "../resolvers/bookResolver";

export const useGraphQL = async (app: Express) => {
  await createConnectionUsing(EnumConnections.MongoDB);

  const schema = await buildSchema({
    resolvers: [BookResolver],
    container: Container,
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
  });

  server.applyMiddleware({ app });
};
