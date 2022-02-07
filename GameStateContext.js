import React from 'react';

const initialGameContext = {
  // gameState: ['', '', '', '', '',
  //             '', '', '' ,'' ,'',
  //             '', '', '', '', '',
  //             '', '', '', '', '',
  //             '', '', '', '', '',
  //             '', '', '', '', ''],
  // gameState: [['', '', '', '', ''],
  //             ['', '', '' ,'' ,''],
  //             ['', '', '', '', ''],
  //             ['', '', '', '', ''],
  //             ['', '', '', '', ''],
  //             ['', '', '', '', '']],
  gameState: [],
  setGameState: () => {return null}
}
const GameStateContext = React.createContext(initialGameContext);
export default GameStateContext;