import "reflect-metadata";
import * as express from "express"
import createSchema from "./utils/createSchema";
import { ApolloServer } from "apollo-server-express"
import { createConnection } from "typeorm";
import * as dotenv from "dotenv"
import { User } from "./entity/User";
import * as jwt from "express-jwt";

dotenv.config()



const createServer = async () => {
    const app = express()

    const path = "/graphql"

    
    await createConnection({
        type: "mysql",
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dropSchema: true,
        entities: [
            User
        ],
        synchronize: true,
        logging: false
    })

    const schema = await createSchema()
    const server = new ApolloServer({ 
        schema,
        context: ({ req }) => {
            const context = {
                req,
                user: req.user
            }
            return context;
        }
      })

      app.use(
          path,
          jwt({
              secret: process.env.TOKEN_SECRET || '',
              credentialsRequired: false,
          })
      )

      app.use((err: express.Errback, _:express.Request, res: express.Response, __: express.NextFunction) => {
          console.log("NO TOKEN")
        if (err.name === 'UnauthorizedError') {
          res.status(401).send('invalid token...');
        }
      });

    server.applyMiddleware({ app, path })
    
      app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
    );
}

createServer()