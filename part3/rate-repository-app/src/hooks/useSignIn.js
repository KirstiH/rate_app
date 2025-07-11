import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  console.log("result", result);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    return mutate({ variables: { credentials: {username, password} } });
  };

  return [signIn, result];
};



export default useSignIn;