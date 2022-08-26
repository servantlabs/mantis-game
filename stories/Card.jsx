import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ dealt, backColor1, backColor2, backColor3, frontColor, size, ...props }) => {
  const mode = dealt ? 'dealt' : 'inDeck';
  const cardFront = {
      backgroundColor: frontColor
    } 
  const cardBack = {
    background: `linear-gradient(160deg, ` + backColor1 + ` 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(160deg, ` + backColor2 + ` 66%, ` + backColor3 + ` 66%)`
  
}
if (dealt) { 
  // Return just the solid background for a card facing up
  return (
    <div 
        className={['card', `card-${size}`, mode].join(' ')} 
        style={cardFront}
        {...props}
        >
    </div>
  );
} else {
  return (
    <div 
        className={['card', `card-${size}`,mode].join(' ')} 
        style={cardBack}
        {...props}
        >
    </div>
  );
}
 //   <button
   //   type="button"
 //     className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
 //     style={backgroundColor && { backgroundColor }}
 //     {...props}
 //   >
 //     {label}
 //   </button>
  
};

Card.propTypes = {
  /**
   * Is the card dealt? If so, show the front, otherwise, show the back. 
   */
  dealt: PropTypes.bool,
  /**
   * What background colors to use
   */
  backColor1: PropTypes.string,
  backColor2: PropTypes.string,
  backColor3: PropTypes.string,
  frontColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  //size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  //label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
   dealt: false,
  onClick: undefined,
  backColor1: "#e07a35", 
    backColor2: "#b1cb55",
    backColor3: "#6e3288",
    frontColor: "#b1cb55",
};
