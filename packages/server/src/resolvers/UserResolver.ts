import { Resolver, Query, Mutation,  Arg } from "type-graphql";
import { User, RegisterInputs } from "../entity/User";

@Resolver(User)
class UserResolver {
    // Here we would inject a service
    constructor(){}

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
}
export default UserResolver