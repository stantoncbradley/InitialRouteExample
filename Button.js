import React from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import CustomText from './Text';

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

const Button = ({ title, onPress, style }) => (
  <TouchableHighlight
    style={[styles.button, style]}
    onPress={onPress}
  >
    <View>
      <CustomText>{title}</CustomText>
    </View>
  </TouchableHighlight>
);

export default Button;
