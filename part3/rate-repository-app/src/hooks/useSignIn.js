import { useMutation} from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

const useSignIn =  () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHENTICATE);
  const apolloClient = useApolloClient();
  console.log("result", result);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { credentials: {username, password} } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();

    return data;
  };

  return [signIn, result];
};



export default useSignIn;