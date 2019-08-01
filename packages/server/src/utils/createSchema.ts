import { buildSchema } from "type-graphql";
import UserResolver from "../resolvers/UserResolver";

export default async () => await buildSchema({
    resolvers: [
        UserResolver
    ]
})