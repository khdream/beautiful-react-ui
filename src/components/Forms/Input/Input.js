import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HelpText from '../_HelpText';
import { Color, IconProp, Size, makeIconFromProp, makeCallback } from '../../../shared';

import './input.scss';

/**
 * An Input component is a field used to get a response from the user
 */
const Input = (props) => {
  const {
    value, onChange, color, placeholder, disabled, size, helpText, icon, iconPosition, className, fluid, style, ...rest
  } = props;

  const classList = useMemo(() => classNames('bi bi-input', `input-${color}`, {
    disabled,
    'has-icon': !!icon,
    'icon-left': iconPosition === 'left',
    'input-sm': size === 'small',
    'input-lg': size === 'large',
    fluid,
  }, className), [color, disabled, icon, iconPosition, size, fluid, className]);

  const onChangeHandler = useCallback(makeCallback(onChange), [onChange]);

  return (
    <div className={classList} style={style}>
      <input value={value} onChange={onChangeHandler} placeholder={placeholder} disabled={disabled} {...rest} />
      {icon && makeIconFromProp(icon, { size })}
      {helpText && <HelpText text={helpText} color={color} />}
    </div>
  );
};

Input.propTypes = {
  /**
   * The input value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The callback to be performed when input's value changes
   */
  onChange: PropTypes.func,
  /**
   * Defines the input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * Defines the input color
   */
  color: Color,
  /**
   * Defines the input size,
   */
  size: Size,
  /**
   * Shows the possible icon
   */
  icon: IconProp,
  /**
   * Defines the icon position
   */
  iconPosition: PropTypes.oneOf(['right', 'left']),
  /**
   * Defines if the input should take all the possible width
   */
  fluid: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.shape({}),
};

Input.defaultProps = {
  value: '',
  onChange: undefined,
  placeholder: 'Input field...',
  disabled: false,
  helpText: undefined,
  color: 'default',
  size: 'default',
  icon: undefined,
  iconPosition: 'right',
  fluid: false,
  style: undefined,
};

export default React.memo(Input);
