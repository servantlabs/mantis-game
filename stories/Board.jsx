import React from 'react';

import { Player } from './Player';
import { Deck } from './Deck';

import './board.css';

export const Board = ({activePlayer}) => (
  
  <div className="board"> 
    
    <Deck />
    <div className="playerGroup">
    <Player 
      name="Lucas"
      score={7}
      redCards={2}
      orangeCards={1}
      yellowCards={0}
      greenCards={3}
      blueCards={2}
      purpleCards={1}
      pinkCards={8}
      active={false}
    />
    <Player 
      name = "Micah" 
      score={4} 
      redCards={0}
      orangeCards={1}
      yellowCards={2}
      greenCards={0}
      blueCards={2}
      purpleCards={1}
      pinkCards={0}
      active={true}
    />
    <Player 
      name = "Dad" 
      score={3}
      redCards={2}
      orangeCards={1}
      yellowCards={2}
      greenCards={0}
      blueCards={2}
      purpleCards={0}
      pinkCards={0}
      active={false}
    />
    <Player 
      name = "Anna"
      score={2}
      redCards={2}
      orangeCards={0}
      yellowCards={0}
      greenCards={3}
      blueCards={0}
      purpleCards={1}
      pinkCards={8}
      active={false}
    />
    </div>
  </div>
);
