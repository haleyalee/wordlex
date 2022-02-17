import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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

const Keyboard = (props) => {

  const {onEnter, onDelete, onChar, keys} = props;
  const [keyState, setKeyState] = useState(keys);

  const onKey = (char) => {
    if (char === 'ENTER') {
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