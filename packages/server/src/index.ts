import "reflect-metadata";
import createSchema from "./utils/createSchema";
import { ApolloServer } from "apollo-server"
import { createConnection } from "typeorm";
import { User } from "./entity/User";



const createServer = async () => {
    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "1234",
        database: "voteNinja",
        entities: [
            User
        ],
        synchronize: true,
        logging: false
    })
    const schema = await createSchema()
    const server = new ApolloServer({ schema  })
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
        });

}

createServer()