import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, makeCallback, Size } from '../../../shared';
import HelpText from '../_HelpText';

import './textarea.scss';

/**
 * A TextArea component is a large text field mostly used for larger texts
 */
const TextArea = (props) => {
  const { color, onChange, value, fluid, size, placeholder, disabled, helpText, resizable, className, ...rest } = props;

  const classList = classNames('bi bi-textarea', `textarea-${color}`, {
    disabled,
    'textarea-sm': size === 'small',
    'textarea-lg': size === 'large',
    fluid,
    resizable,
  }, className);

  return (
    <div className={classList}>
      <textarea
        value={value}
        onChange={makeCallback(onChange)}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {helpText && <HelpText text={helpText} color={color} />}
    </div>
  );
};


TextArea.propTypes = {
  /**
   * The component value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The onChange handler
   */
  onChange: PropTypes.func,
  /**
   * Defines the placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Disables the textarea
   */
  disabled: PropTypes.bool,
  /**
   * Defines the textarea border color
   */
  color: Color,
  /**
   * Defines the textarea size,
   */
  size: Size,
  /**
   * Defines if the textarea should take all the possible width
   */
  fluid: PropTypes.bool,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * Defines if the textarea should be resizable or not
   */
  resizable: PropTypes.bool,
};

TextArea.defaultProps = {
  value: undefined,
  onChange: undefined,
  placeholder: 'Insert your text...',
  disabled: false,
  color: 'default',
  size: 'default',
  fluid: false,
  helpText: undefined,
  resizable: false,
};

export default React.memo(TextArea);
