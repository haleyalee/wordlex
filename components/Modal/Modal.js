import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const modalStyles = StyleSheet.create({
  modal: {
    position: 'absolute',
    marginTop: '50%',
    zIndex: 4000,
    backgroundColor: '#272729',
    borderRadius: 6,
    width: 350,
    height: 300,
    flex: 1
  },
  // box: {
  //   position: 'relative',
  //   width: 350,
  //   height: 300
  // },
  message: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  x: {
    alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute'
  }
});

const Modal = (props) => {

  const {message, handleClose} = props;
  return(
    <View style={modalStyles.modal}>
      {/* <View style={modalStyles.box}> */}
        <Button style={modalStyles.x} title={'x'} onPress={handleClose} />
        <Text style={modalStyles.message}>{message}</Text>
      {/* </View> */}
    </View>
  );
}

export default Modal;