import React from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import CustomText from './Text';
import Button from './Button';

const MainScreen = ({ logout }) => (
  <Container>
    <CustomText>Main</CustomText>
    <Button
      onPress={logout}
      title="Log out"
    />
  </Container>
);

const MainScreenWithRedux = connect(
  null,
  dispatch => ({
    logout: () => dispatch({ type: 'TOGGLE_LOGIN', loggedIn: false }),
  }),
)(MainScreen);

export default MainScreenWithRedux;
