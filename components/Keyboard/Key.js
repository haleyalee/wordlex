import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
// import GameStateContext from '../GameStateContext';

const keyStyles = StyleSheet.create({
  button: {
    minWidth: 38,
    height: 58,
    borderRadius: 4,
    // backgroundColor: '#818384',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  text: {
    color: '#d7dadc',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: 10
  }
});

const Key = (props) => {

  const {char, color, onKey} = props;
  // const [letter, setLetter] = useState('');
  // const {gameState, setGameState} = useContext(GameStateContext);

  const handleKeyPress = () => {
    onKey(char.toUpperCase());
    // let move = [...gameState];
    // const newIdx = move.indexOf('');
    // if (char === '↩' && move[0] !== '') {
    //   move[newIdx-1] = '';
    // }
    // else if (newIdx !== 0 && newIdx % 5 === 0) {
    //   move[newIdx] = '';
    //   if (char === 'enter') {
    //     console.log('enter');
    //     props.onEnter();
    //   }
    // }
    // else if (char !== '↩' & char !== 'enter') {  
    //   move[newIdx] = char.toUpperCase();
    // }
    // setGameState(move);
  }

  return(
    <Pressable 
      style={[keyStyles.button, {backgroundColor: `${color}`}, ]}
      onPress={handleKeyPress}
    >
      <Text style={keyStyles.text}>{char}</Text>
    </Pressable>
  );
}

export default Key;