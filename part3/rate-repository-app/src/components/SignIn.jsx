/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import { StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.lighterText,
    },
    upperContainer: {
        flexDirection: 'column',
        backgroundColor: theme.colors.textSecondary,
        padding: 10
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
        fontFamily: theme.fonts.main,
    },
    inputBox: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderColor: theme.colors.lighterText,
        color: theme.colors.lighterText,
        borderRadius: 5,
        fontSize: theme.fontSizes.subheading,
        fontFamily: theme.fonts.main,
    },
    inputBoxError: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderColor: 'red',
        borderRadius: 5,
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.lighterText,
        fontFamily: theme.fonts.main,
    },
    error: {
        color: theme.colors.error,
        paddingBottom: 10,
        fontFamily: theme.fonts.main,
    }
})

const initialValues = {
    username: '',
    password: '',
};

// const onSubmit = (values) => {
//     console.log(values);
// };


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Too short!')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long!')
    .required('Password is required'),
});


const SignIn = () => {

  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  };

  const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
  });

  return (
    <View style={styles.container}>
        <View style={styles.upperContainer}>
        <TextInput style={formik.errors.username ? styles.inputBoxError : styles.inputBox}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
            <Text style={styles.error}>{formik.errors.username}</Text>
        )}
        <TextInput secureTextEntry style={formik.errors.password ? styles.inputBoxError : styles.inputBox}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
            <Text style={styles.error}>{formik.errors.password}</Text>
        )}
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