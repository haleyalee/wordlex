import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tile from './Tile';

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 0.5
  }
});
const CompletedRow = (props) => {

  const {guess, colorState} = props;

  return(
    <View style={rowStyles.row}>
      {guess.map((letter, idx) =>
        <Tile key={idx} letter={letter} color={colorState[idx]} />
      )}
    </View>
  );
};

export default CompletedRow;
