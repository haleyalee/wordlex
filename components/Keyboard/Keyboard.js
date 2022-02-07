import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GameStateContext from '../../GameStateContext';
import Key from './Key';

const keyboardStyles = StyleSheet.create({
  keyboard: {
    paddingBottom: 40
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 1,
  }
});

const keys = [{char: 'q', color: '#818384'},
              {char: 'w', color: '#818384'},    
              {char: 'e', color: '#818384'},
              {char: 'r', color: '#818384'},
              {char: 't', color: '#818384'},
              {char: 'y', color: '#818384'},
              {char: 'u', color: '#818384'},
              {char: 'i', color: '#818384'},
              {char: 'o', color: '#818384'},
              {char: 'p', color: '#818384'},
              {char: 'a', color: '#818384'},
              {char: 's', color: '#818384'},
              {char: 'd', color: '#818384'},
              {char: 'f', color: '#818384'},
              {char: 'g', color: '#818384'},
              {char: 'h', color: '#818384'},
              {char: 'j', color: '#818384'},
              {char: 'k', color: '#818384'},
              {char: 'l', color: '#818384'},
              {char: 'enter', color: '#818384'},
              {char: 'z', color: '#818384'},
              {char: 'x', color: '#818384'},
              {char: 'c', color: '#818384'},
              {char: 'v', color: '#818384'},
              {char: 'b', color: '#818384'},
              {char: 'n', color: '#818384'},
              {char: 'm', color: '#818384'},
              {char: '↩', color: '#818384'}];

const Keyboard = (props) => {

  const {onEnter, onDelete, onChar} = props;
  const {gameState, setGameState} = useContext(GameStateContext);
  const [keyState, setKeyState] = useState(keys);

  const onKey = (char) => {
    if (char === 'enter') {
      onEnter();
    } else if (char === '↩') {
      onDelete();
    } else {
      onChar(char);
    }
  }

  return(
    <View style={keyboardStyles.keyboard}>
      <View style={keyboardStyles.keyboardRow}>
        {keyState.slice(0, 10).map(c => <Key key={c.char} char={c.char} color={c.color} onKey={onKey} /> )}
      </View>
      <View style={keyboardStyles.keyboardRow}>
        {keyState.slice(10, 19).map(c => <Key key={c.char} char={c.char} color={c.color} onKey={onKey} /> )}
      </View>
      <View style={keyboardStyles.keyboardRow}>
        {keyState.slice(19, 28).map(c => <Key key={c.char} char={c.char} color={c.color} onKey={onKey} /> )}
      </View>
    </View>
  );
}

export default Keyboard;