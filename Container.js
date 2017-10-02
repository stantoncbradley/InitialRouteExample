import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default Container;
