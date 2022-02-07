import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tile from './Tile';

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 0.5
  }
});
const CurrentRow = (props) => {

  const {guess} = props;
  const empty = Array.from(Array(5 - guess.length));

  return(
    <View style={rowStyles.row}>
      {guess.map((letter, idx) => 
        <Tile key={idx} letter={letter} />
      )}
      {empty.map((_, idx) =>
        <Tile key={idx} letter={''} />
      )}
    </View>
  );
};

export default CurrentRow;
