import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Tile from './Tile';

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 0.5
  }
});

const Row = props => {

  const [guess, setGuess] = useState(props.guess);

  useEffect(() => {

  }, []);

  return(
    <View style={rowStyles.row}>
      {guess.map((letter, idx) => {
        <Tile key={idx} letter={letter} />
      })}
    </View>
  );
}

export default Row;