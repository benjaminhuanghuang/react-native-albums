import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Header from './components/Header';
import AlbumList from './components/AlbumList';

//
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Header headerText={"Albums"} />
        <AlbumList/> 
      </View>
    );
  }
}
