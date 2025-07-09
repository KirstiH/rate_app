/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import { StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.textSecondary,
        padding: 10,
    },
    upperContainer: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    submitButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 10,
        color: theme.colors.textSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: theme.colors.textSecondary,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading,
    },
    inputBox: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderColor: theme.colors.lighterText,
        color: theme.colors.lighterText,
        borderRadius: 5,
        fontSize: theme.fontSizes.subheading,
    },
})

const initialValues = {
    username: '',
    password: '',
};

const onSubmit = (values) => {
    console.log(values);
};


const SignIn = () => {

  const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
  });

  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
        <TextInput style={styles.inputBox}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
        />
        <TextInput style={styles.inputBox}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
        />
        <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
            <Text style={styles.submitButtonText}>Sign in</Text>
        </Pressable>
        </View>
    </View>
    );
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;