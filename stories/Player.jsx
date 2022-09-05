import React from 'react';
import { Card } from './Card';

import './player.css';

export const Player = ({name, score, active, leading, winner, greenCards, yellowCards, redCards, blueCards, pinkCards, orangeCards, purpleCards}) => (
  <div className={['player', `player-active-${active}`].join(' ')}>
    <div className="name">
      <h2>Player: {name}</h2>
    </div>
    
    <div className='cardHolder'>
      {redCards > 0 && <Card 
        dealt={true}
        size='small'
        value={redCards}
        frontColor="red"
      />}
      {orangeCards > 0 && <Card 
        dealt={true}
        size='small'
        value={orangeCards}
        frontColor="orange"
      />}
      {yellowCards > 0 && <Card 
        dealt={true}
        size='small'
        value={yellowCards}
        frontColor="yellow"
      />}
      {greenCards > 0 && <Card 
        dealt={true}
        size='small'
        value={greenCards}
        frontColor="green"
      />}
      {blueCards > 0 && <Card 
        dealt={true}
        size='small'
        value={blueCards}
        frontColor="blue"
      />}
      {purpleCards > 0 && <Card 
        dealt={true}
        size='small'
        value={purpleCards}
        frontColor="purple"
      />}
      {pinkCards > 0 && <Card 
        dealt={true}
        size='small'
        value={pinkCards}
        frontColor="pink"
      />}
    </div>
    <div className='scorePile'> <h2>Score: {score}</h2></div>
  </div>
);


