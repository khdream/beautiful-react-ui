import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import CloseIcon from '../_CloseIcon';
import { Color } from '../../../shared';
import './alert.scss';

/**
 * Alert component provides a contextual feedback messages for the user actions.
 */
const Alert = (props) => {
  const { color, solid, outline, onClose, children, className, ...rest } = props;

  const classList = classNames(`bi bi-alert alert-${color}`, {
    'alert-solid': solid,
    'alert-outline': outline,
  }, className);

  return (
    <div className={classList} {...rest}>
      {children}
      {onClose && <Button color="transparent" className="alert-button" onClick={onClose}><CloseIcon /></Button>}
    </div>
  );
};

Alert.propTypes = {
  /**
   * Defines the color of the alert, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * A solid background style variant with white text and without border.
   */
  solid: PropTypes.bool,
  /**
   * Shows the outlines only
   */
  outline: PropTypes.bool,
  /**
   * onClose accept a function. If there's any function, it will show a button
   */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  color: 'default',
  solid: false,
  outline: false,
  onClose: undefined,
};

export default React.memo(Alert);
