import { Children } from 'react';

/**
 * Returns true if the react children passed as a parameter are actually empty
 * @param children
 * @returns {boolean}
 */
const emptyChildren = (children) => {
  const arr = Children.toArray(children);

  return arr.length === 0 || (arr.length === 1 && arr[0] === '');
};


export default emptyChildren;
