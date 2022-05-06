import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, makeCallback, makeKeyboardCallback } from '../../../shared';
import CheckIcon from './CheckIcon';
import HelpText from '../_HelpText';

import './checkbox.scss';

/**
 * A Checkbox is a boolean input field mostly used to get a boolean-like response from the user:
 * *yes/no*, *true/false*, etc...<br />
 * Similar to ToggleSwitch a checkbox is commonly in classic forms.
 */
const Checkbox = (props) => {
  const { value, onChange, color, helpText, className, CheckIconRender, style, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-checkbox', `bi-checkbox-${color}`, {
    checked: !!value,
    disabled: rest.disabled,
  }, className), [color, value, rest.disabled]);

  const onClick = !rest.disabled ? useCallback(makeCallback(onChange, !value), [onChange, value]) : undefined;
  const onKeyUp = !rest.disabled ? useCallback(makeKeyboardCallback(onChange, !value), [onChange, value]) : undefined;

  return (
    // eslint-disable-next-line max-len
    <div className={classList} onClick={onClick} onKeyUp={onKeyUp} tabIndex={0} role="checkbox" aria-checked={value} style={style}>
      <input type="checkbox" value={value} {...rest} />
      <CheckIconRender checked={!!value} color={color} />
      {helpText && <HelpText text={helpText} />}
    </div>

  );
};

Checkbox.propTypes = {
  /**
   * The checkbox value, boolean
   */
  value: PropTypes.bool,
  /**
   * The checkbox on change handler
   */
  onChange: PropTypes.func,
  /**
   * Defines the checkbox background color
   */
  color: Color,
  /**
   * Defines whether the checkbox should be disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * Defines the check icon renderer
   */
  CheckIconRender: PropTypes.elementType,
};


Checkbox.defaultProps = {
  value: false,
  onChange: undefined,
  color: 'default',
  disabled: false,
  helpText: undefined,
  CheckIconRender: CheckIcon,
};

export default React.memo(Checkbox);
