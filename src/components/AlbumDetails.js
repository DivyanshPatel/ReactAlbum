import React from 'react';
import {View , Text, Image, Linking } from 'react-native';
import Card from "./card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetails = (props) => {

  return(
    <Card>

      <CardSection>
        <View style = {styles.thumbnailContainer}>
          <Image
            style ={styles.thumbnailStyle}
            source = {{uri: props.album.thumbnail_image}}/>
        </View>
        <View style = {styles.headerContentStyle}>
          <Text style = {styles.headerTextStyle} >{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

      </CardSection>

      <CardSection>
        <Image
          style = {styles.imageStyle}
          source = {{uri: props.album.image}}/>
      </CardSection>

      <CardSection>
        <Button onPress= {() => Linking.openURL(props.album.url)}/>
      </CardSection>

    </Card>
  );

};

styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
