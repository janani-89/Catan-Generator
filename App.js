/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Alert
} from 'react-native';
import Generator from './components/Generator';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App= () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [shufflePattern, setShufflePattern] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const generatePattern = () => {
    setShufflePattern(true);
    setShowGenerator(true);
  }

  useEffect(() => {
    if(shufflePattern) setShufflePattern(false);
  }, [shufflePattern])

  return (

        <View
          style={styles.base}>
            <Text style={[styles.highlight, styles.title]}> Catan Generator</Text>
            <Text style={styles.description}> Please click Generate Button to create Catan Resource Placements</Text> 
            <Pressable 
              onPress={() => generatePattern()}
              style={styles.btn}
            >
              <Text style={styles.btnText}> Generate</Text>
            </Pressable>
            {showGenerator && <Generator shufflePattern={shufflePattern} />}
        </View>

  );
};

const styles = StyleSheet.create({

  highlight: {
    fontWeight: '700',
  },
  title:{
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    padding: 10,
  },
  base: {
    flex:1,
    backgroundColor: '#f5fffa'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    margin: 10
  },
  btnText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default App;
