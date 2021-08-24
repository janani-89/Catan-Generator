import React from 'react'
import { View, Text, Image, StyleSheet, 
        TouchableOpacity, PanResponder, Animated, Dimensions, Button, Linking, ScrollView } from 'react-native';

const ResourceImage = ({shuffledResource, numberPool}) => {

    const renderResourceImage = (resource) => {
      switch(resource) {
        case "Wood": 
          return <Image style={styles.image} source={require("../utils/img/wood.png")} />
        case "Ore":
          return <Image style={styles.image} source={require("../utils/img/ore.png")} />
        case "Sheep": 
          return <Image style={styles.image} source={require("../utils/img/sheep.png")} />
        case "Hay":
          return <Image style={styles.image} source={require("../utils/img/hay.png")} />
        case "Brick":
          return <Image style={styles.image} source={require("../utils/img/brick.png")} />
        default:
          return <Image style={styles.image} source={require("../utils/img/desert.jpeg")} />;
      }
    }
    const resources = shuffledResource && shuffledResource.map((resource, i) => renderResourceImage(resource));
    console.log(numberPool,'numberPool')
    return(
        <View style={styles.container}>
          <View style={styles.imageView}>
              {resources[0]}
              {resources[1]}
              {resources[2]}
          </View>
          <View style={styles.imageView}>
              {resources[3]}
              {resources[4]}
              {resources[5]}
              {resources[6]}
          </View>
          <View style={styles.imageView}>
              {resources[7]}
              {resources[8]}
              {resources[9]}
              {resources[10]}
              {resources[11]}
          </View>
          <View style={styles.imageView}>
              {resources[12]}
              {resources[13]}
              {resources[14]}
              {resources[15]}
          </View>
          <View style={styles.imageView}>
              {resources[16]}
              {resources[17]}
              {resources[18]}
          </View>
        </View>
    )
  }

  const styles = StyleSheet.create({

    image: {
      width:50,
      height: 50,
    },
    imageView:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    }
  })
  
export default ResourceImage;