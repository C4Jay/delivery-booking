import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Delivernav from './nav/delivernav';

export default function App() {
  return (
    <Delivernav></Delivernav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
