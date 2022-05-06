import React from 'react';
import Pill from '../../components/Elements/Pill';

/**
 * return a Pill component from a given prop
 */

const makePillFromProp = (pillProp, defaultProp = {}) => {
  if (typeof (pillProp) === 'string') {
    return <Pill {...defaultProp}>{pillProp}</Pill>;
  }
  return React.cloneElement(pillProp, defaultProp);
};

export default makePillFromProp;
