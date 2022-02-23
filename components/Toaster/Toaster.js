import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const toasterStyles = StyleSheet.create({
  toaster: {
    position: 'absolute',
    marginTop: 100,
    zIndex: 1000,
    backgroundColor: '#edeff1',
    borderRadius: 6,
    padding: 20
  },
  message: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18
  }
});

const Toaster = (props) => {

  const {message} = props;
  return(
    <View style={toasterStyles.toaster}>
      <Text style={toasterStyles.message}>{message}</Text>
    </View>
  );
}

export default Toaster;