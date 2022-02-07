import React, {useState} from 'react';
import GameStateContext from './GameStateContext';

const GameStateProvider = props => {
  // const initialGameState = ['', '', '', '', '',
  //                           '', '', '' ,'' ,'',
  //                           '', ''  , '', '', '',
  //                           '', '', '', '', '',
  //                           '', '', '', '', '',
  //                           '', '', '', '', ''];
  // const initialGameState = [['', '', '', '', ''],
  //                           ['', '', '', '', ''],
  //                           ['', '', '', '', ''],
  //                           ['', '', '', '', ''],
  //                           ['', '', '', '', ''],
  //                           ['', '', '', '', '']];
  const initialGameState = [];

  const [gameState, setGameState] = useState(initialGameState);

  const context = { gameState, setGameState };

  return(
    <GameStateContext.Provider value={context}>
      {props.children}
    </GameStateContext.Provider>
  );
}

export default GameStateProvider;