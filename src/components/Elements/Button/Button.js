import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';
import Pill from '../Pill';
import {
  makeIconFromProp,
  makeCallback,
  emptyChildren,
  getLastChild,
  getFirstChild,
  makeSpinnerFromProp,
  makePillFromProp,
  Size,
  Color,
  IconProp,
  PillProp,
} from '../../../shared';

import './button.scss';

/**
 * Button components are used to provide a visual indication user actions.
 */
const Button = (props) => {
  const {
    type, fluid, color, rounded, outline, disabled, size, icon, hover, spinner, onClick, pill,
    className, ElementRender, children, ...rest
  } = props;

  const lastChild = getLastChild(children);
  const firstChild = getFirstChild(children);

  const classList = classNames('bi bi-btn', `btn-${color}`, {
    'btn-fluid': fluid,
    'btn-outline': outline,
    'btn-rounded': rounded,
    'btn-he-zoom': hover === 'zoom',
    'btn-he-float': hover === 'float' || hover === true,
    'btn-he-shrink': hover === 'shrink',
    'btn-he-refl': hover === 'reflection',
    'btn-he-rnd': hover === 'round',
    'btn-sm': size === 'small',
    'btn-lg': size === 'large',
    'btn-icon-only': emptyChildren(children),
    'btn-lci': lastChild && typeof lastChild !== 'string',
    'btn-fcp': firstChild && firstChild.type === Pill,
  }, className);

  const onClickHandler = useCallback(makeCallback(onClick), [onClick]);

  return (
    <ElementRender disabled={disabled} type={type} onClick={onClickHandler} className={classList} {...rest}>
      {/* Generate icon if exists */}
      {!!icon && makeIconFromProp(icon)}
      {/* Generate spinner if exists */}
      {!!spinner && makeSpinnerFromProp(spinner, { size })}
      {/* Generate pill if exists */}
      {children}
      {!!pill && makePillFromProp(pill)}
    </ElementRender>
  );
};

Button.propTypes = {
  /**
   * Defines the button color, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`
   * or `transparent`
   */
  color: Color,
  /**
   * Defines the button's size, can be `small`, `default`, `large`
   */
  size: Size,
  /**
   * Shows the outlines only
   */
  outline: PropTypes.bool,
  /**
   * Makes the button rounded
   */
  rounded: PropTypes.bool,
  /**
   * Defines the button's type
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /**
   * Disables the button
   */
  disabled: PropTypes.bool,
  /**
   * Makes the button completely fluid (full width)
   */
  fluid: PropTypes.bool,
  /**
   * Defines the hover effect, can be `round`, `zoom`,  `shrink`,  `float`, `reflection`
   */
  hover: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['round', 'zoom', 'shrink', 'float', 'reflection']),
  ]),
  /**
   * Attaches a callback to the 'click' event
   */
  onClick: PropTypes.func,
  /**
   * Shows an icon, you can pass both a valid Icon component name prop or the instance of an Icon component
   */
  icon: IconProp,
  /**
   * Shows a spinner icon within the button. The prop value can be "true" to show a standard <Spinner />
   * or the actual instance of a <Spinner /> component.
   * If the prop value is "false" or any falsy value (undefined or null) the spinner won't show.
   */
  spinner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Spinner),
  ]),
  /**
   * Show a pill into the button. You can pass both a valid pill label prop or the instance of an pill component
   */
  pill: PillProp,
  /**
   * A renderer to replace the button element
   */
  ElementRender: PropTypes.elementType,
};

Button.defaultProps = {
  color: 'default',
  size: 'default',
  rounded: false,
  outline: false,
  fluid: false,
  type: 'button',
  disabled: false,
  hover: undefined,
  icon: undefined,
  spinner: false,
  onClick: null,
  pill: undefined,
  ElementRender: 'button',
};

export default React.memo(Button);
