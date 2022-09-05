import React from 'react';

import './deck.css';
import { Card } from './Card';

export const Deck = ({}) => {

// I could create a "stack" of cards that get randomly picked from, but I think I'll start with a random color generator.
var colors = [
  "red",
  "orange", 
  "yellow",
  "green",
  "blue",
  "purple",
  "pink"
]

var cardColors = [];
var index = 0;
// random color from array for 3 unique colors 
for (var i = 0; i < 3; i++) {
  index = Math.floor(Math.random()*colors.length);
  cardColors.push(colors[index]); // save color to array
  colors.splice(index,1); // remove color from main array
  
}

// pick one of the three colors to be the front color
index = Math.floor(Math.random()*cardColors.length);
cardColors.push(cardColors[index]); // save color to array in fourth place
// cardcolors now contains 3 unique colors for the back of the card, and 

return (
  <div className="deck">
    <h2>Deck</h2>
    <Card 
      dealt={false} 
      size="large" 
      backColor1={cardColors[0]} 
      backColor2={cardColors[1]} 
      backColor3={cardColors[2]} 
      frontColor={cardColors[3]}
    />
    <p>Next Move: Pick player to receive card. </p>
  </div>
);
};




