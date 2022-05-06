import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getPortalWrapper from './getPortalWrapper';
import './ElementRemovePolyfill';


/**
 * Creates a React Portal with the given id.
 * Takes care of removing the created portal on component unmount
 */
const Portal = ({ id, children }) => {
  const wrapper = getPortalWrapper(id);

  /**
   * the following effect returns a clean-up function to be performed
   * on component unmount: removes the given wrapper if empty.
   */
  useEffect(() => () => {
    if (wrapper && wrapper.innerHTML === '') {
      wrapper.remove();
    }
  }, []);

  return createPortal(children, wrapper);
};

Portal.propTypes = {
  /**
   * the id of the portal wrapper
   */
  id: PropTypes.string.isRequired,
};

export default React.memo(Portal);
