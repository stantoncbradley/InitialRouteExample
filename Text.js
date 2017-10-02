import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

const CustomText = ({ children }) => (
  <Text style={styles.text}>
    {children}
  </Text>
);

export default CustomText;
