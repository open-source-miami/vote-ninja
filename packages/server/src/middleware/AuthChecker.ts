import { AuthChecker } from "type-graphql";
import { IContext } from "src/shared/context";

export const customAuthChecker: AuthChecker<IContext> = (
    {context},
  ) => {
    if (context.req.user) {
        return true
    }
    return false
  };