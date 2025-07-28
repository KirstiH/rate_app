
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import Constants from 'expo-constants';
// import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client/link/http';
import AsyncStorage from '@react-native-async-storage/async-storage';


// const createApolloClient = () => {
//   return new ApolloClient({
//     // uri: 'http://192.168.100.24:4000/graphql',
//     uri: Constants.expoConfig.extra.uri,
//     cache: new InMemoryCache(),
//   });
// };

const apolloUri = Constants.expoConfig.extra.uri;

const httpLink = createHttpLink({
  uri: apolloUri,
});

const createApolloClient = () => {

  const authLink = new ApolloLink(async (operation, forward) => {
    const token = await AsyncStorage.getItem('auth:accessToken'); // Make sure this key matches

    if (token) {
      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          authorization: `Bearer ${JSON.parse(token)}`,
        },
      }));
    }

    return forward(operation);
  });

// const createApolloClient = (authStorage) => {
//   const authLink = setContext(async (_, { headers }) => {
//     try {
//       const accessToken = await authStorage.getAccessToken();
//       return {
//         headers: {
//           ...headers,
//           authorization: accessToken ? `Bearer ${accessToken}` : '',
//         },
//       };
//     } catch (e) {
//       console.log(e);
//       return {
//         headers,
//       };
//     }
//   });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;