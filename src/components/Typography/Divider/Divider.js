import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './divider.scss';

/**
 * A Divider component is generally used to divide some parts of the page
 * @param props
 * @returns {*}
 * @constructor
 */
const Divider = (props) => {
  const { fancy, clear, light, line, className, children, ...rest } = props;

  const classes = classNames('bi bi-divider', {
    'bi-divider-fancy': fancy,
    'bi-divider-linelong': !children,
    'bi-divider-text': !!children,
    'bi-divider-clearfix': clear,
    'bi-divider-light': light,
    'bi-divider-dashed': line === 'dashed',
    'bi-divider-dotted': line === 'dotted',
  }, className);

  return (<div className={classes} {...rest}><span>{children}</span></div>);
};


Divider.propTypes = {
  /**
   * shows 2 lines instead of one
   */
  fancy: PropTypes.bool,
  /**
   * clears the content both left and right
   */
  clear: PropTypes.bool,
  /**
   * changes the line color from dark (default) to light
   */
  light: PropTypes.bool,
  /**
   * changes the line style
   */
  line: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
};

Divider.defaultProps = {
  fancy: false,
  clear: true,
  light: false,
  line: 'solid',
};

export default React.memo(Divider);
