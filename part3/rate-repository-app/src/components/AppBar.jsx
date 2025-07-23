/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";
import { ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import { useState } from 'react';

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

  const [showSignOut, setShowSignOut] = useState(false);

  const signOut = () => {
    const { data } = useQuery(ME, {
      fetchPolicy: 'cache-and-network',
    });
  
    if (data) {
      setShowSignOut(true);
    }
  }
  

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <Pressable onPress={onPressFunction}>
          <Link to="/">
            <Text style={styles.containerText}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable onPress={showSignOut}>
          <Text style={styles.containerText}>Sign out</Text>
        </Pressable>
        <Link style={showSignOut} to="/signin">
            <Text style={styles.containerText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;