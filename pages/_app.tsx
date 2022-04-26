import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { getApolloClient } from "../lib/apollo";
import { UserContextProvider } from '../components/userContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = getApolloClient();
  return <ApolloProvider client={client}>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </ApolloProvider> 
}

export default MyApp
