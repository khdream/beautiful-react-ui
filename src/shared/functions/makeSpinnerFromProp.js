import React from 'react';
import Spinner from '../../components/Elements/Spinner';

/**
 * Returns an Spinner component from a given prop
 */
const makeSpinnerFromProp = (iconProp, defaultProps = {}) => {
  if (iconProp === true) {
    return (<Spinner {...defaultProps} />);
  }

  return React.cloneElement(iconProp, defaultProps);
};

export default makeSpinnerFromProp;
