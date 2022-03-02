import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Animated } from 'react-native';
import ShakeView from '../Animated/ShakeView';

const Tile = (props) => {
  const {letter} = props;
  const [color] = useState(props.color || '#121213');
  
  
  const tileStyle = (myColor) => {
    return {
      backgroundColor: (letter) ? myColor : '#121213',
      height: 62,
      width: 62,
      borderColor: (letter) ? ((myColor === '#121213') ? '#565758' : myColor) : '#3a3a3c',
      borderWidth: 2,
      margin: 2,
      color: '#d7dadc',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase'
    }
  }
  
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (letter !== '') triggerAnim();
  }, [letter])


  const triggerAnim = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.1, duration: 50, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 50, useNativeDriver: true }),
    ]).start();
  }

  return(
    <Animated.View
      style={{
        transform: [{scale: scaleAnim}]
      }}
    >
      <SafeAreaView>
        <TextInput 
          // style={[tileStyles.input, {backgroundColor: `${color}`}]}
          style={tileStyle(color)}
          editable={false}
          autoFocus={true}
          value={letter}
        />
      </SafeAreaView>
    </Animated.View>
  );
}

export default Tile;