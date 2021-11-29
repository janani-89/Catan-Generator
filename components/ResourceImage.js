
import React from 'react'
import { View, Text, Image, StyleSheet, 
  ImageBackground } from 'react-native';

const ResourceImage = ({ shuffledResource, numberPool }) => {

    const imageSrc = (resource) => {
      let source;
      switch(resource) {
        case "Wood": 
          source = require("../utils/img/wood.png");
          break;
        case "Ore":
          source= require("../utils/img/ore.png");
          break;
        case "Sheep": 
          source= require("../utils/img/sheep.png");
          break;
        case "Hay":
          source= require("../utils/img/hay.png");
          break;
        case "Brick":
          source= require("../utils/img/brick.jpg");
          break;
        case "Desert":
          source= require("../utils/img/desert.jpeg");
          break;
        default: 
          break;
      }
      return source;
    }

    const numberToDots = (number) => {
      const dotsMap = {2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8:5, 9:4, 10: 3, 11: 2, 12: 1};
      const dotsCount = dotsMap.hasOwnProperty(number) ? dotsMap[number] : null;
      const customStyle = (number == 10 || number == 11 || number ==12) ? styles.alignedLeft 
                        :styles.alignedRight;
      return Array.from({length:dotsCount}, (_, i) => (<View key={i} style={[styles.dot, customStyle, dotsCount == 5 && styles.redBackground]}/>))
    }
      
    const renderResourceImage = (resource, number) => {
      const src = imageSrc(resource);
      const customStyle = (number == 2 ? styles.left4px : (number == 5 || number == 9) && styles.left10px ) 
      const highProbability = (number == 6 || number == 8) && styles.highProbability;
      return <ImageBackground source={src} style={styles.image}>
        {resource != "Desert" && <View style={styles.numberBackground}>
          <Text style={[styles.numberText, customStyle, highProbability]}> {number} </Text>
          {numberToDots(number)}
        </View> }
      </ImageBackground>
    }

    const resources = shuffledResource && shuffledResource.map((resource, i) => renderResourceImage(resource, numberPool[i]));
    
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
      width: 70,
      height: 70,
      position: 'relative',
      justifyContent: 'center', 
      alignItems: 'center',
    },
    imageView:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'center',
    },
    container:{ 
      width: '100%',
      height: '100%',
      flex: 1
    },
    outline: {
      width: '100%',
      height: '100%',
      flex: 1
    },
    numberText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 18,
      textAlign: 'center',
      bottom: 2,
      alignItems: 'center',
      justifyContent: 'center',
      left: 6
    },
    left10px: {
      left: 10
    },
    left4px:{
      left: 4
    },  
    numberBackground: {
      backgroundColor: '#fbe484',
      borderRadius: 17,
      position: 'absolute',
      width: 34,
      height: 34,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    dot:{
      width:4,
      height:4,
      backgroundColor: 'black',
      borderRadius: 2,
      marginRight: 1,
      top: 10,
    },
    alignedRight: {
      right: 10,
    },
    redBackground: {
      backgroundColor: '#ff0000',
    },
    highProbability: {
      color: '#ff0000',
      left: 11
    }, 
    alignedLeft: {
      right: 14
    }
  })

export default ResourceImage;