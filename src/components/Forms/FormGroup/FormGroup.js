import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './form-group.scss';

/**
 * Wraps a number of form components and makes a group out of them
 */
const FormGroup = (props) => {
  const { orientation, children, className, ...rest } = props;

  const classList = classNames('bi bi-fgroup', {
    'bi-vertical-fgroup': orientation === 'vertical',
    'bi-horizontal-fgroup': orientation === 'horizontal',
  }, className);

  return (
    <div className={classList} {...rest}>
      {children}
    </div>
  );
};

FormGroup.propTypes = {
  /**
   * Defines if children should be vertically or horizontally aligned
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

FormGroup.defaultProps = {
  orientation: 'vertical',
};

export default React.memo(FormGroup);
