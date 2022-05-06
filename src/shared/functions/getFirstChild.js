import { Children } from 'react';

/**
 * Returns the first child of a React children prop
 * @param children
 * @returns {any}
 */
const getFirstChild = (children) => {
  const arr = Children.toArray(children);

  return arr.length > 0 ? arr[0] : null;
};

export default getFirstChild;
