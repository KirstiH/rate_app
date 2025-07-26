import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
//import apolloClient from '../utils/apolloClient';

const useSignIn =  () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
  console.log("result", result);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await mutate({ variables: { credentials: {username, password} } });
    // await authStorage.setAccessToken(data.authenticate.accessToken);
    //apolloClient.resetStore();

    if (data?.authenticate?.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    }

    return data;
  };

  return [signIn, result];
};



export default useSignIn;