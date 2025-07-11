import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';


const createApolloClient = () => {
  return new ApolloClient({
    // uri: 'http://192.168.100.24:4000/graphql',
    uri: Constants.expoConfig.extra.uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;