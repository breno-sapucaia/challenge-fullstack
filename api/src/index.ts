import "reflect-metadata";
import initServer from "./config/initServer";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema";


initServer(typeDefs, resolvers);
