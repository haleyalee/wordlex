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

  const {guess} = props;

  return(
    <View style={rowStyles.row}>
      {guess.map((letter, idx) =>
        <Tile key={idx} letter={letter} />
      )}
    </View>
  );
};

export default CompletedRow;
