import { Children } from 'react';
import CardImage from '../CardImage';

// It takes out the possible CardImage component from children and returns them all
const takeCardImageOutOfChildren = (children) => {
  const childrenArray = Children.toArray(children);
  let cardImage = null;
  const nextChildren = childrenArray.filter((child) => {
    if (child.type !== CardImage) {
      return child;
    }
    cardImage = child;
    return false;
  });

  return [cardImage, nextChildren];
};

export default takeCardImageOutOfChildren;
