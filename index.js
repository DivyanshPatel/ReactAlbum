import React from 'react';
import {Text, AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a component
const App = () => (
  <Header headerText={'Albums!!!!!'}/>
);

// Render it on the device

AppRegistry.registerComponent('albums', () => App);
