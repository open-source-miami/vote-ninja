import { Resolver, Query, Mutation,  Arg, Authorized } from "type-graphql";
import { User, RegisterInputs, LoginResponse } from "../entity/User";
import * as argon2 from "argon2"
import * as jwt from "jsonwebtoken"

@Resolver(User)
class UserResolver {
    // Here we would inject a service
    constructor(){}

    @Authorized()
    @Query(() => String)
    hello() {
        return "Hello world"
    }

    @Mutation(() => User!)
    async register(@Arg("data") inputs: RegisterInputs) {
        const doesExist = await User.findOne({
            where: { email: inputs.email },
            select: ["id"]
        })  

        if (doesExist) {
            return "Email is in use";
        }

        const user = await User.create(inputs).save();
        return user;
    }

    @Mutation(() => LoginResponse)
    async login( @Arg("email") email: string, @Arg("password") password: string): Promise<LoginResponse> {
            const user = await User.findOne({
                where: { email }
            })

            const { TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env

            if (user && TOKEN_SECRET && REFRESH_TOKEN_SECRET) {
                const validPassword = await argon2.verify(user.password, password);
                
                if (validPassword) {
                    const { id, email } = user;
                    const token = jwt.sign({ id, email }, TOKEN_SECRET, { expiresIn: "1h" })
                    const refreshToken = jwt.sign({ id }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" })

                    if (token && refreshToken) {
                        return {
                            ok: true,
                            token,
                            refreshToken
                        }
                    }
                }
            }

            return {
                ok: false,
                token: "",
                refreshToken: ""
            }
            
    }
}
export default UserResolver