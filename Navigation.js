import React from 'react';
import { StackNavigator } from 'react-navigation';
import InitialRoute from './InitialRoute';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';

const routeConfigs = {
  InitialRoute: { screen: InitialRoute },
  login: { screen: LoginScreen },
  main: { screen: MainScreen },
};

const StackNavigationConfig = {
  initialRouteName: 'InitialRoute',
  headerMode: 'none',
};

const Navigation = StackNavigator(routeConfigs, StackNavigationConfig);

const Nav = ({ screenProps }) => (
  <Navigation screenProps={screenProps} />
);

export default Nav;
