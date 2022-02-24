import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GameStateContext from './contexts/GameStateContext';
import Grid from './components/Board/Grid';
import Toaster from './components/Toaster/Toaster';
import Modal from './components/Modal/Modal';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';

import COLOR_CODES from './constants/colorCodes';
import VALID_WORDS from './constants/validWords';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative'
  }
});

const word = 'light';

const keys = [{char: 'Q', color: '#818384'},
              {char: 'W', color: '#818384'},    
              {char: 'E', color: '#818384'},
              {char: 'R', color: '#818384'},
              {char: 'T', color: '#818384'},
              {char: 'Y', color: '#818384'},
              {char: 'U', color: '#818384'},
              {char: 'I', color: '#818384'},
              {char: 'O', color: '#818384'},
              {char: 'P', color: '#818384'},
              {char: 'A', color: '#818384'},
              {char: 'S', color: '#818384'},
              {char: 'D', color: '#818384'},
              {char: 'F', color: '#818384'},
              {char: 'G', color: '#818384'},
              {char: 'H', color: '#818384'},
              {char: 'J', color: '#818384'},
              {char: 'K', color: '#818384'},
              {char: 'L', color: '#818384'},
              {char: 'ENTER', color: '#818384'},
              {char: 'Z', color: '#818384'},
              {char: 'X', color: '#818384'},
              {char: 'C', color: '#818384'},
              {char: 'V', color: '#818384'},
              {char: 'B', color: '#818384'},
              {char: 'N', color: '#818384'},
              {char: 'M', color: '#818384'},
              {char: '↩', color: '#818384'}];

const Game = () => {

  const targetWord = word.toUpperCase().split('');

  const {gameState, setGameState} = useContext(GameStateContext);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [colorState, setColorState] = useState([]);
  const [keyState, setKeyState] = useState(keys);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMsg, setToasterMsg] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  // Update keyboard colors
  useEffect(() => {
    setKeyState(keys);
  }, [keys]);

  // Hide toaster after 1s
  useEffect(() => {
    const toasterTimer = setTimeout(() => {
      if (showToaster) {
        setShowToaster(false);
        setToasterMsg('');
      }
    }, 1000);
    return () => clearTimeout(toasterTimer);
  }, [showToaster])

  // Game ends
  useEffect(() => {
    if (gameWon) {
      console.log("GAME WON");
      setModalMsg("You won!");
      setShowModal(true);
    }
    else if (gameLost) {
      console.log("GAME LOST")
      setModalMsg("You lost!");
      setShowModal(true);
    }
  }, [gameWon, gameLost]);

  const handleClose = () => {
    console.log("closing modal");
    setShowModal(false);
    setModalMsg('');
  }

  const onEnter = () => {
    // Case 1: Word is not 5 letters
    if (currentGuess.length !== 5 && !gameWon) {
      setToasterMsg('Not enough letters');
      setShowToaster(true);
      return;
    }

    // Case 2: Word is not a real word
    if (!VALID_WORDS.includes(currentGuess.join('').toLowerCase()) && !gameWon) {
      setToasterMsg('Not a valid word');
      setShowToaster(true);
      return;
    }

    // Case 3: Word is 5 letters and there are guesses remaining
    if (currentGuess.length === 5 && gameState.length<6 && !gameWon) {

      const colors = [];
      const cpyGuess = [...currentGuess].map(letter => { return { char: letter, stat: 0 } });
      const cpyTarget = [...targetWord].map(letter => { return { char: letter, stat: 0 } })

      // Correct
      cpyGuess.forEach((letter, idx) => {
        if (letter.char === cpyTarget[idx].char) {
          letter.stat = 1;
          cpyTarget[idx].stat = 1;
        }
      });

      // Present and Incorrect
      cpyGuess.forEach((letter, idx) => {
        if (letter.stat === 0) {
          const targetIdx = cpyTarget.findIndex((l) => l.char === letter.char && l.stat === letter.stat);
          if (targetIdx !== -1) {
            letter.stat = 2;
            cpyTarget[targetIdx].stat = 1;
          }
          else {
            letter.stat = 3;
          }
        }
      });

      // Update grid and keyboard colors
      cpyGuess.forEach(letter => {
        let keyObj = {char: letter.char};

        if (letter.stat === 1) {
          colors.push(COLOR_CODES.correct);
          keyObj.color = COLOR_CODES.correct;
        }
        else if (letter.stat === 2) {
          colors.push(COLOR_CODES.present);
          keyObj.color = COLOR_CODES.present;
        }
        else {
          colors.push(COLOR_CODES.incorrect);
          keyObj.color = COLOR_CODES.incorrect;
        }

        keys.find((letter, idx) => {
          if (letter.char === keyObj.char) {
            if (keyObj.color === COLOR_CODES.correct || letter.color === COLOR_CODES.correct) {
              keyObj.color = COLOR_CODES.correct;
            }
            else if (keyObj.color === COLOR_CODES.present || letter.color === COLOR_CODES.present) {
              keyObj.color = COLOR_CODES.present;
            }
            keys[idx] = keyObj;
            return true;
          }
        });
      });
      setColorState([...colorState, colors]);
    }

    setGameState([...gameState, currentGuess]);
    setCurrentGuess([]);
    
    // Game is won
    if (currentGuess.join('') === targetWord.join('')) {
      setToasterMsg('Magnificent');
      setShowToaster(true);
      setGameWon(true);
      return;
    }

    // Game is lost
    if (gameState.length === 5) {
      setToasterMsg(targetWord.join('').toUpperCase());
      setShowToaster(true);
      setGameLost(true);
      return;
    } 
  }

  const onDelete = () => {
    if (currentGuess.length !== 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  }

  const onChar = (char) => {
    if (currentGuess.length < 5) {
      setCurrentGuess([...currentGuess, char]);
    }
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Header />
      { showToaster && toasterMsg && <Toaster message={toasterMsg} /> }
      { showModal && modalMsg && <Modal message={modalMsg} handleClose={handleClose} /> }
      <Grid currentGuess={currentGuess} colorState={colorState}/>
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} keys={keyState} />

    </View>
  );
}

export default Game;

