import React from 'react';
import { connect } from 'react-redux';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';

const InitialRoute = ({ loggedIn }) => (
  loggedIn ? <MainScreen /> : <LoginScreen />
);

const InitialRouteWithRedux = connect(
  ({ loggedIn }) => ({ loggedIn }),
)(InitialRoute);

export default InitialRouteWithRedux;
