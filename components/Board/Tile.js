import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

const tileStyles = StyleSheet.create({
  input: {
    height: 62,
    width: 62,
    borderColor: '#3a3a3c',
    borderWidth: 2,
    margin: 2,
    color: '#d7dadc',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
});

const Tile = (props) => {
  // const [letter, setLetter] = useState('');
  const {letter} = props;

  return(
    <SafeAreaView>
      <TextInput 
        style={tileStyles.input}
        editable={false}
        // onChangeText={setLetter}
        value={letter}
      />
    </SafeAreaView>
  );
}

export default Tile;