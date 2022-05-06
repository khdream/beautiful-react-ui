import React from 'react';
import Icon from '../../components/Elements/Icon';

/**
 * Returns an icon component from a given prop
 */
const makeIconFromProp = (iconProp, defaultProps = {}) => {
  if (typeof iconProp === 'string' || Array.isArray(iconProp)) {
    return (<Icon name={iconProp} {...defaultProps} />);
  }

  return React.cloneElement(iconProp, defaultProps);
};

export default makeIconFromProp;
