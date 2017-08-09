
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
//
import AlbumDetail from './AlbumDetail';
//
class AlbumList extends Component {
  //component level state
  state = {
    albums: []
  };

  renderAlbums(){
    return this.state.albums.map(album=> 
      <AlbumDetail key={album.title} album={album}/>);
  }

  componentWillMount() {
    url = "https://rallycoding.herokuapp.com/api/music_albums";
    axios.get(url)
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;