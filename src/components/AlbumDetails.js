import React from 'react';
import {View , Text } from 'react-native';
import Card from "./card";

const AlbumDetails = (props) => {

  return(
      <Card>
      <Text>{props.album.title}</Text>
    </Card>
  );

};

export default AlbumDetails;
