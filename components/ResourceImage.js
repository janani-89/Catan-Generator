import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

const ResourceImage = ({shuffledResource, numberPool}) => {

  const resources = shuffledResource && shuffledResource.filter((resource, i) => resource != "Desert");
  //const numbers = numberPool.map(num => <Text>{num}</Text>);
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
    return Array.from({length:dotsCount},(i)=> (<View key={i} style={[styles.dot, customStyle, dotsCount == 5 && styles.redBackground]}/>))
  }
  
  const renderResourceImage = (resource, number) => {
    const src = imageSrc(resource);
    const customStyle = (number == 2 ? styles.left4px : (number == 6 || number == 8 || number == 9) && styles.left10px ) 
    return <ImageBackground source={src} style={styles.image}>
      {resource != "Desert" && <View style={styles.numberBackground}>
        <Text style={[styles.numberText, customStyle]}> {number} </Text>
        {numberToDots(number)}
      </View> }
    </ImageBackground>
  }

  return(
    resources.length!==0 && numberPool.length!==0 && <View style={styles.container}>
        {/* <ImageBackground source={require("../utils/img/background.png")} style={styles.outline} resizeMode='cover'  > */}
          <View style={styles.imageView}>
            {renderResourceImage(resources[0], numberPool[0])}
            {renderResourceImage(resources[1], numberPool[1])}
            {renderResourceImage(resources[2], numberPool[2])}
          </View>
          <View style={styles.imageView}>
            {renderResourceImage(resources[3], numberPool[3])}
            {renderResourceImage(resources[4], numberPool[4])}
            {renderResourceImage(resources[5], numberPool[5])}
            {renderResourceImage(resources[6], numberPool[6])}
          </View>
          <View style={styles.imageView}>
            {renderResourceImage(resources[7], numberPool[7])}
            {renderResourceImage(resources[8], numberPool[8])}
            {renderResourceImage("Desert", null)}
            {renderResourceImage(resources[9], numberPool[9])}
            {renderResourceImage(resources[10], numberPool[10])}
          </View>
          <View style={styles.imageView}>
            {renderResourceImage(resources[11], numberPool[11])}
            {renderResourceImage(resources[12], numberPool[12])}
            {renderResourceImage(resources[13], numberPool[13])}
            {renderResourceImage(resources[14], numberPool[14])}
          </View>
          <View style={styles.imageView}>
            {renderResourceImage(resources[15], numberPool[15])}
            {renderResourceImage(resources[16], numberPool[16])}
            {renderResourceImage(resources[17], numberPool[17])}
          </View>
        {/* </ImageBackground> */}
      </View>
    )
  }

  const styles = StyleSheet.create({

    image: {
      width: 74,
      height: 74,
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
    alignedLeft: {
      right: 14
    }
  })
  
export default ResourceImage;