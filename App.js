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
  Button,
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
    flex: 1
  };

  const generatePattern = () => {
    setShufflePattern(true);
    setShowGenerator(true);
  }

  useEffect(() => {
    if(shufflePattern) setShufflePattern(false);
  }, [shufflePattern])

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.base}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text style={[styles.highlight, styles.title]}> Catan Generator</Text>
            <Text> Please click Generate Button to create Catan Resource Placements</Text> 
            <Button title="Generate"
              onPress={() => generatePattern()}
            />
            {showGenerator && <Generator shufflePattern={shufflePattern} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontSize: 16
  },
  base: {
    flex:1,
  }
});

export default App;
