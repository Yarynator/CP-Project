import * as mutations from "./mutations";
import * as queries from "./queries";

export const resolvers = {
    Query: queries,
    Mutation: mutations
}

/*import "./database";

export const resolvers = {
    Query: {
      users(parent:any, args:any, context:any) {
        return [{ name: "Nextjs" }];
      },
      rooms(parent: any, args: any, context: any) {
          return [{name: ":)"}];
      },
      klubovna(parent:any,args:any,context:any)
        {
            return [
                {
                    id: 1,
                    name: "Klubovna 1"
                },
                {
                    id: 2,
                    name: "Klubovna 2"
                }
            ]
        }
    }
  };*/