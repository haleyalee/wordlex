import React, { useEffect, useState } from 'react';
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
  const {letter} = props;
  const [color, setColor] = useState(props.color || '#121213');
  
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
  // let state;

  // useEffect(()=> {
  //   state = StyleSheet.create({
  //     background: {
  //       backgroundColor: `${color}`
  //     }
  //   })
  // }, [color]);

  return(
    <SafeAreaView>
      <TextInput 
        // style={[tileStyles.input, {backgroundColor: `${color}`}]}
        style={tileStyle(color)}
        editable={false}
        // onChangeText={setLetter}
        value={letter}
      />
    </SafeAreaView>
  );
}

export default Tile;