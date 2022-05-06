import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, Size } from '../../../shared';

import './spinner.scss';

/**
 * A Spinner component is used to show an animated glyph, mostly used to point that an activity has to complete.
 */
const Spinner = (props) => {
  const { color, type, size, className, ...rest } = props;

  const classes = classNames('bi', 'bi-spinner', `spinner-${color}`, {
    'spin-sm': size === 'small',
    'spin-lg': size === 'large',
    'spinner-pulse': type === 'pulse',
    'spinner-circle': type === 'circle',
  }, className);

  return (
    <span className={classes} {...rest} />
  );
};

Spinner.propTypes = {
  /**
   * Defines the spinner color, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * Defines the button size, can be `small`, `default`, `large`
   */
  size: Size,
  /**
   * Defines the spinner type, can be `circle` or `pulse`
   */
  type: PropTypes.oneOf(['circle', 'pulse']),
};

Spinner.defaultProps = {
  color: 'default',
  size: 'default',
  type: 'circle',
};

export default React.memo(Spinner);
