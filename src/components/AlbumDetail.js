
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//
import Card from './Card'
//
const AlbumDetail = (props) => {
  return (
    <Card>
      <Text> {props.album.title}</Text>
    </Card>
  );
}

export default AlbumDetail; 