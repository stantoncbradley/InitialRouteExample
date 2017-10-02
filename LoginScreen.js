import React from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import CustomText from './Text';
import Button from './Button';

const LoginScreen = ({ login }) => (
  <Container>
    <CustomText>Login Screen</CustomText>
    <Button
      onPress={login}
      title="Login"
      style={{ backgroundColor: 'green' }}
    />
  </Container>
);

const LoginScreenWithRedux = connect(
  null,
  dispatch => ({
    login: () => dispatch({ type: 'TOGGLE_LOGIN', loggedIn: true }),
  }),
)(LoginScreen);

export default LoginScreenWithRedux;
