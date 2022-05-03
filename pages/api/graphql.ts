import {
    ApolloServer,
    gql,
  } from 'apollo-server-micro';
  import {ApolloServerPluginLandingPageGraphQLPlayground,} from "apollo-server-core";
  import type {
    NextApiRequest,
    NextApiResponse,
  } from 'next';
  
  //import { resolvers } from '../../serverApi/resorvers';
  //import { typeDefs } from "../../serverApi/types";
  import { mutations } from '../../serverApi/mutations/mutations';
  import { queries } from '../../serverApi/queries/queries';
  import { resolvers } from '../../serverApi/resorvers';
import { verifyToken } from '../../serverApi/lib/VerifyToken';

  
  
  const apolloServer = new ApolloServer({ typeDefs: [mutations, queries], resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], 
    context: async ({req, res})=>{
      const authorizationHeader = req.headers.authorization 
      console.log(authorizationHeader);
      const context = {
        user: authorizationHeader ? await verifyToken(req.headers.authorization) : undefined
    }
    return context;
  }});
  const startServer = apolloServer.start();
  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://studio.apollographql.com"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  };
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  export default handler;