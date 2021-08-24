import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { resources, shuffle, resourceGenerator, numbers } from '../utils/constants';
import ResourceImage from './ResourceImage';

const Generator = ({shufflePattern}) => {
    const [shuffledResource, setShuffleResource ] = useState([]);
    const [numberPool, setNumberPool] = useState([]);

    useEffect(() => {
      if(shufflePattern) {
        const imagePool = resourceGenerator(resources);
        const shuffledResource = shuffle(imagePool);
        const numberPool = shuffle(numbers);
        setNumberPool(numberPool);
        setShuffleResource(shuffledResource);
      }
    }, [shufflePattern]);

    return(
      <View style={styles.container}>
        <ResourceImage shuffledResource={shuffledResource} numberPool={numberPool}/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      marginTop:50,
      flex:2,
      backgroundColor: 'white'
  },
  })
  
export default Generator;