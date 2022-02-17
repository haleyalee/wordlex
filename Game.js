import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Grid from './components/Board/Grid';
import Header from './components/Header';
import Keyboard from './components/Keyboard/Keyboard';
import GameStateContext from './GameStateContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
    alignItems: 'center',
    justifyContent: 'space-around',
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

  useEffect(() => {
    setKeyState(keys);
  }, [keys]);

  const onEnter = () => {
    // Case 1: Word is not 5 letters
    if (currentGuess.length !== 5) return;

    // Case 2: Word is not a real word

    // Case 3: Word is 5 letters and there are guesses remaining
    if (currentGuess.length === 5 && gameState.length<6) {
      // Game is won
      if (currentGuess === targetWord) {
        setGameWon(true);
      }
      // Game is lost
      else if (gameState.length === 5) {
        setGameLost(true);
      } 
      // Regular turn
      else {
        const colors = [];
        currentGuess.forEach((letter, idx) => {
          const targetLetter = targetWord[idx];
          let keyObj = {char: letter};
          // Correct: Exact match
          if (letter === targetLetter) {
            // set letter green
            colors.push('#538d4e');
            keyObj.color = '#538d4e';
          }
          // Present: Wrong position
          else if (targetWord.includes(letter)) {
            // check for duplicates
            // set letter yellow
            colors.push('#b59f3b');
            keyObj.color = '#b59f3b';
          }
          // Absent: Does not contain 
          else {
            // set letter gray
            colors.push('#3a3a3c');
            keyObj.color = '#3a3a3c';
          }
          keys.find((letter, idx) => {
            if (letter.char === keyObj.char) {
              keys[idx] = keyObj;
              return true;
            }
          });
        });
        setColorState([...colorState, colors]);
      }
      setGameState([...gameState, currentGuess]);
      setCurrentGuess([]);
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
      <Grid currentGuess={currentGuess} colorState={colorState}/>
      <Keyboard onEnter={onEnter} onDelete={onDelete} onChar={onChar} keys={keyState} />

    </View>
  );
}

export default Game;

