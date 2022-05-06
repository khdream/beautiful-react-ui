import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color } from '../../../shared';

import './label.scss';

/**
 * The Label component is used within this very same library to render forms' related labels
 */
const Label = (props) => {
  const { color, text, required, tagName, htmlFor, children, className, ...rest } = props;
  const Tag = ['span', 'label'].includes(tagName) ? tagName : 'label';

  const classes = classNames('bi bi-label', `bi-label-${color}`, { required }, className);

  return (
    <Tag htmlFor={htmlFor} className={classes} {...rest}>
      {text}
      {children}
      {required && <span>*</span>}
    </Tag>
  );
};

Label.propTypes = {
  /**
   * Defines the text to be shown
   */
  text: PropTypes.string,
  /**
   * Defines the label color
   */
  color: Color,
  /**
   * Defines the label html tag
   */
  tagName: PropTypes.oneOf(['span', 'label']),
  /**
   * Defines whether the label is referring to a required input or not
   */
  required: PropTypes.bool,
  /**
   * Defines the possible label `for` attribute
   */
  htmlFor: PropTypes.string,
};


Label.defaultProps = {
  text: undefined,
  color: 'default',
  required: false,
  tagName: 'label',
  htmlFor: undefined,
};

export default React.memo(Label);
