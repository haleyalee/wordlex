import React from 'react';
import { StyleSheet, View } from 'react-native';

import Tile from './Tile';

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 0.5
  }
});
const EmptyRow = () => {

  const empty = Array.from(Array(5));

  return(
    <View style={rowStyles.row}>
      {empty.map((_, idx) => 
        <Tile key={idx} letter={''} />
      )}
    </View>
  );
};

export default EmptyRow;
