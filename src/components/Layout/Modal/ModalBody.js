import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ModalBody component is used to show the content of the modal.
 */
const ModalBody = (props) => {
  const { children } = props;

  return (
    <div className="bi-modal-body">
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,
};


ModalBody.defaultProps = {
  children: undefined,
};

export default React.memo(ModalBody);
