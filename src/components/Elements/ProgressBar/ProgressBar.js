import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './prograss-bar.scss';

/**
 * The ProgressBar component displays the progress of a generic process. <br />
 * Differently from the Spinner component it is generally used for a deterministic progress, meaning a progress which
 * completion can generally be predicted, for example: the upload of an image.
 */
const ProgressBar = ({ color, completed, ElementRender, FillRender, className, ...rest }) => {
  const classList = classNames('bi bi-progress-bar', `bi-bar-${color}`, className);

  return (
    <ElementRender className={classList} {...rest}>
      <FillRender className="bi-progress-bar-fill" style={{ width: `${completed}%` }} />
    </ElementRender>
  );
};


ProgressBar.propTypes = {
  /**
   * Defines the percentage of the completed progress
   */
  completed: PropTypes.number,
  /**
   * Defines the line colour
   */
  color: Color,
  /**
   * A renderer to replace the standard sidebar element
   */
  ElementRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard filling line element
   */
  FillRender: PropTypes.elementType,
};

ProgressBar.defaultProps = {
  completed: 0,
  color: 'primary',
  ElementRender: 'div',
  FillRender: 'div',
};

export default ProgressBar;
