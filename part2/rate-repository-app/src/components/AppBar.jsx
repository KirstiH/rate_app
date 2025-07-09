/* eslint-disable react/react-in-jsx-scope */
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";

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
  // ...
});

const onPressFunction = () => {
  console.log('Pressed');
};

const AppBar = () => {
  return (
    <View style={styles.container}>
        <Pressable onPress={onPressFunction}>
            <Text style={styles.containerText}>Repositories</Text>
        </Pressable>
        <Link to="/signin">
            <Text style={styles.containerText}>Sign in</Text>
        </Link>
    </View>
  );
};

export default AppBar;