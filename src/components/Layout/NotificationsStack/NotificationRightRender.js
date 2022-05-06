import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Elements/Button/Button';
import CloseIcon from '../../Elements/_CloseIcon/CloseIcon';

/**
 * This component handle the notification's right section
 * usually it shows a closable button
 */
const NotificationRightRender = ({ onToggle }) => (
  <div className="notification-right-side">
    <Button color="transparent" onClick={onToggle} size="small">
      <CloseIcon />
    </Button>
  </div>
);

NotificationRightRender.propTypes = {
  /**
   * This prop will close the notification after certain time, if timeout is defined, or on button click.
   */
  onToggle: PropTypes.func.isRequired,
};

export default NotificationRightRender;
