import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {globalStyles} from '../../utils/globalStyles';
import * as yup from 'yup';
import {Formik} from 'formik';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter valid email')
    .required('Email Address is required'),
  password: yup
    .string()
    .min(6, ({min}) => `password must be at least ${min} characters`)
    .required('password is required')
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    // ),
});
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onLogin() {
    auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
            placeholderTextColor="#000"
            style={globalStyles.primaryInput}
            // onChangeText={text => setEmail(text)}
          />
          {errors.email && touched.email && (
            <Text style={styles.errors}>{errors.email}</Text>
          )}
          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={globalStyles.primaryInput}
            placeholder="Password"
            placeholderTextColor="#000"
            // onChangeText={text => setPassword(text)}
          />
          {errors.password && touched.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )}
          <Button
            disabled={!isValid}
            style={[
              styles.loginBtn,
              styles.shadowButton,
              {
                shadowColor: '#00acee',
                backgroundColor: isValid ? 'purple' : 'gray',
              },
            ]}
            title="Login"
            onPress={onLogin}
          />
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
  loginBtn: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
  },
  shadowButton: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
});
