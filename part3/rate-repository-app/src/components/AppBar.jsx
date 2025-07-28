/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";
import { ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: theme.fonts.main,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: theme.colors.textSecondary,
    paddingRight: 20
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  // ...
});

const onPressFunction = () => {
  console.log('Pressed');
};

const AppBar = () => {

  // const [currentUser, setCurrentUser] = useState(false);

  // const { data } = useQuery(ME, {
  //   refetchWritePolicy: 'cache-and-network',
  // });

const { data } = useQuery(ME, {
  refetchWritePolicy: 'cache-and-network',
});

// useEffect(() => {
//   if (error) console.log("ME query error:", error);
//   if (data) console.log("ME query data:", data);
// }, [data, error]);
  
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  const isSignedIn = data?.me?.username != null;
  

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <Pressable onPress={onPressFunction}>
          <Link to="/">
            <Text style={styles.containerText}>Repositories</Text>
          </Link>
        </Pressable>
        {isSignedIn ? (
          <Pressable onPress={handleSignOut}>
          <Text style={styles.containerText}>Sign out</Text>
        </Pressable>
        ) : (
          <Link to="/signin">
            <Text style={styles.containerText}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;