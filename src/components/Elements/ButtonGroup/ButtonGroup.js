import React, { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color, Size, checkOnAllowedChildren } from '../../../shared';
import Button from '../Button';

import './button.group.scss';

/**
 * overrides the button instance's props with the group ones
 * @param buttonInstance
 * @param props
 */
const cloneButton = (buttonInstance, props) => {
  checkOnAllowedChildren(buttonInstance, [Button], 'Button');

  return React.cloneElement(buttonInstance, props);
};

/**
 * Wraps a number of buttons and makes a group out of them
 */
// eslint-disable-next-line react/prop-types
const ButtonGroup = ({ children, className, fluid, id, style, ...props }) => {
  // the reason I'm disabling eslint "react/destructuring-assignment" rule is that I want to keep some props within the
  // props constant, as it will then be passed as a parameter to the cloneButton function.
  /* eslint-disable react/destructuring-assignment */
  const classList = classNames('bi bi-btn-group', `btn-group-${props.color}`, {
    'group-fluid': fluid,
    'group-outline': props.outline,
    'group-rounded': props.rounded,
  }, className);
  /* eslint-enable react/destructuring-assignment */

  return (
    <span className={classList} id={id} style={style}>
      {Children.map(children, (child) => cloneButton(child, props))}
    </span>
  );
};


ButtonGroup.propTypes = {
  /**
   * Defines the buttons color, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`
   * or `transparent`
   */
  color: Color,
  /**
   * Defines the buttons' size, can be `small`, `default`, `large`
   */
  size: Size,
  /**
   * Applies the outline style to the buttons
   */
  outline: PropTypes.bool,
  /**
   * Makes the buttons rounded
   */
  rounded: PropTypes.bool,
  /**
   * Makes the button completely fluid (full width)
   */
  fluid: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
};

ButtonGroup.defaultProps = {
  color: 'default',
  size: 'default',
  outline: false,
  rounded: false,
  fluid: false,
  children: null,
};

export default React.memo(ButtonGroup);
