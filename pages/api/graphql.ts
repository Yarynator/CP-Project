import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';

import { verifyToken } from '../../serverApi/lib/VerifyToken';
// import { resolvers } from '../../serverApi/resorvers';
// import { typeDefs } from "../../serverApi/types";
import { mutations } from '../../serverApi/mutations/mutations';
import { queries } from '../../serverApi/queries/queries';
import { resolvers } from '../../serverApi/resorvers';

const apolloServer = new ApolloServer({
  typeDefs: [mutations, queries],
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: async ({ req }) => {
    const authorizationHeader = req.headers.authorization;
    return {
      user: authorizationHeader
        ? await verifyToken(req.headers.authorization)
        : undefined,
    };
  },
});
const startServer = apolloServer.start();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);

  return true;
};
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
