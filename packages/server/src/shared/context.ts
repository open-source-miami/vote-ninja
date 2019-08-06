import { User } from "../entity/User";

export interface IContext {
    req: {
        user: User
    },
    res: Response
}