import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, makeCallback, makeKeyboardCallback } from '../../../shared';
import HelpText from '../_HelpText';

import './toggle.scss';

/**
 * A ToggleSwitch is a boolean input field mostly used to get a boolean-like response from the user:
 * *yes/no*, *true/false*, etc...<br />
 * Similar to Checkbox a toggle switch is commonly used as checkbox replacements in modern user interfaces.
 */
const ToggleSwitch = (props) => {
  const { value, onChange, color, disabled, helpText, className, SwitchRender, RailRender, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-toggle', `bi-toggle-${color}`, {
    disabled,
    toggled: value,
  }, className), [value, color, className, disabled]);

  // handlers
  const onClick = !disabled ? makeCallback(onChange, !value) : undefined;
  const onKeyUp = !disabled ? makeKeyboardCallback(onChange, !value) : undefined;

  return (
    <div className={classList} {...rest}>
      <RailRender className="bi-toggle-rail" role="button" tabIndex={0} onClick={onClick} onKeyUp={onKeyUp}>
        <SwitchRender className="bi-toggle-switch" />
      </RailRender>
      {helpText && <HelpText text={helpText} />}
    </div>
  );
};

ToggleSwitch.propTypes = {
  /**
   * The toggle value, boolean
   */
  value: PropTypes.bool,
  /**
   * The toggle on change handler
   */
  onChange: PropTypes.func,
  /**
   * Changes the toggle background color when toggled
   */
  color: Color,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * Defines whether the switch should be disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * Defines the switch element renderer
   */
  SwitchRender: PropTypes.elementType,
  /**
   * Defines the switch rail renderer
   */
  RailRender: PropTypes.elementType,
};

ToggleSwitch.defaultProps = {
  value: false,
  onChange: undefined,
  color: 'success',
  helpText: undefined,
  disabled: false,
  SwitchRender: 'div',
  RailRender: 'div',
};

export default ToggleSwitch;
