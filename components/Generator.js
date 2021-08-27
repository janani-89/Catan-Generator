import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { resources, shuffle, resourceGenerator, numbers } from '../utils/constants';
import ResourceImage from './ResourceImage';

const Generator = ({reload}) => {
    const [shuffledResource, setShuffleResource ] = useState([]);
    const [numberPool, setNumberPool] = useState([]);

    useEffect(() => {
      console.log(reload,'reload')
      if(reload) {
        console.log('called')
        const imagePool = resourceGenerator(resources);
        const shuffledResource = shuffle(imagePool);
        const numberPool = shuffle(numbers);
        //const shuffledNumbers = shuffle(numberPool);
        setNumberPool(numberPool);
        setShuffleResource(shuffledResource);
      }
    }, [reload]);

    return(
      <View style={styles.container}>
        <ResourceImage shuffledResource={shuffledResource} numberPool={numberPool} reload={reload}/>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      marginTop:50,
      flex:2,
      backgroundColor: '#f5fffa'
  },
  })
  
export default Generator;