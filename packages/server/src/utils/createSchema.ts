import { buildSchema } from "type-graphql";
import UserResolver from "../resolvers/UserResolver";
import { customAuthChecker } from "../middleware/AuthChecker";

export default async () => await buildSchema({
    resolvers:[ 
        UserResolver
    ],
    authChecker: customAuthChecker
    
})