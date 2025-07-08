import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    paddingBottom: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    marginBottom: 10,
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: theme.fonts.main,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    color: theme.colors.textSecondary,
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
    </View>
  );
};

export default AppBar;