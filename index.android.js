import React from 'react';
import {Text, AppRegistry } from 'react-native';


// Create a component
const App = () => (
  <Text> Some Text </Text>
);

// Render it on the device

AppRegistry.registerComponent('albums', () => App);
