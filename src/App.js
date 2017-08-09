import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Header from './components/Header';
//
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header headerText={"Albums"} />
    );
  }
}
