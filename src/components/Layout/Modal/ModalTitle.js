import React from 'react';
import PropTypes from 'prop-types';


/**
 * this component is rendering the header of the modal window.
 */
const ModalTitle = (props) => {
  const { children } = props;
  return (
    <div className="bi-modal-title">
      {children}
    </div>
  );
};

ModalTitle.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,
};

ModalTitle.defaultProps = {
  children: undefined,
};

export default React.memo(ModalTitle);
