import { Children } from 'react';

/**
 * Returns the last child of a React children prop
 * @param children
 * @returns {any}
 */
const getLastChild = (children) => {
  const arr = Children.toArray(children);

  return arr.length > 0 ? arr[arr.length - 1] : null;
};

export default getLastChild;
