import React from 'react';
import GameStateProvider from './contexts/GameStateProvider';
import Game from './Game';

export default function App() {
  
  return (
    <GameStateProvider>
      <Game />
    </GameStateProvider>
  );
}

