'use strict'

import { ApolloServer } from "apollo-server-express"
import cors from "cors";
import cookieParser from "cookie-parser"
import express from "express";

import accessEnv from "#root/helpers/accessEnv";
import formatGraphQLErrors from "#root/helpers/formatGraphQLError";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

const PORT = accessEnv("PORT", 7000)["PORT"];
const app = express();

const apolloServer = new ApolloServer({
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs
});

app.use(cookieParser());

app.use(
    cors({
        origin: (origin, cb) => cb(null, null),
        credentials: true
    })
);

apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });


app.listen(PORT, "0.0.0.0", () => {
    console.info(`running ${PORT}`);
})