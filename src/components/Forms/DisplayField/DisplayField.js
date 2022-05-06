import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Label from '../Label';
import { Color } from '../../../shared';

import './display-field.scss';

/**
 * A display-only text field useful for displaying ead-only values with labels.
 */
const DisplayField = (props) => {
  const { className, value, valueColor, label, labelColor, borderStyle, boldLabel, boldValue, ...rest } = props;
  const classList = classNames('bi bi-df', `bi-df-${valueColor}`, {
    [`bi-df-border-${borderStyle}`]: !!borderStyle,
    'bi-df-bold-label': boldLabel,
    'bi-df-bold-value': boldValue,
  }, className);

  return (
    <div className={classList} {...rest}>
      <Label color={labelColor} tagName="span" className="bi-df-label">{label}</Label>
      <span className="bi-df-value">{value}</span>
    </div>
  );
};


DisplayField.propTypes = {
  /**
   * Defines the field label
   */
  label: PropTypes.string.isRequired,
  /**
   * Defines the label color
   */
  labelColor: Color,
  /**
   * Defines field value
   */
  value: PropTypes.node.isRequired,
  /**
   * Defines the value color
   */
  valueColor: Color,
  /**
   * Defines the border style
   */
  borderStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double', 'none']),
  /**
   * Set the font-weight of the label to bold
   */
  boldLabel: PropTypes.bool,
  /**
   * Set the font-weight of the value to bold
   */
  boldValue: PropTypes.bool,
};


DisplayField.defaultProps = {
  labelColor: 'default',
  valueColor: 'default',
  borderStyle: 'solid',
  boldLabel: false,
  boldValue: false,
};

export default React.memo(DisplayField);
