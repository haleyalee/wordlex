import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import GameStateContext from '../../GameStateContext';

import CurrentRow from './CurrentRow';
import CompletedRow from './CompletedRow';
import EmptyRow from './EmptyRow';

const gridStyles = StyleSheet.create({
  board: {
    padding: 10
  }
});

const Grid = (props) => {

  const {currentGuess, colorState} = props;
  const {gameState, setGameState} = useContext(GameStateContext);
  const [currentBoard, setCurrentBoard] = useState(gameState);

  // console.log(currentBoard);

  useEffect(() => {
    setCurrentBoard(gameState);
  }, [gameState])

  const empty = gameState.length < 5 ? Array.from(Array(5 - gameState.length)) : [];
  // console.log(colorState);

  return(
    <View style={gridStyles.board}>
      {/* Previous Guesses */}
      {gameState.map((guess, idx) => 
        <CompletedRow key={idx} guess={guess} colorState={colorState[idx]} />
      )}
      {/* Current Guess */}
      {gameState.length < 6 && <CurrentRow guess={currentGuess} />}
      {/* Unused Rows */}
      {empty.map((_, idx) => 
        <EmptyRow key={idx} />
      )}

    </View>
  );
}

export default Grid;