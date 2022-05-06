import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './form-panel.scss';

/**
 * A FormPanel wraps a group of input-fields or form-groups to provide a hierarchical division within forms.<br />
 * Can be used to wrap together fields of the same context.
 */
const FormPanel = (props) => {
  const { label, labelType, LabelRender, children, className, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-form-panel', {
    [`bi-fp-label-${labelType}`]: !!labelType,
  }, className), [labelType, className]);

  return (
    <div className={classList} {...rest}>
      {label && (<LabelRender className="bi-fp-label">{label}</LabelRender>)}
      <div className="bi-fp-content">
        {children}
      </div>
    </div>
  );
};

FormPanel.propTypes = {
  /**
   * Defines the panel label to be shown on top of it
   */
  label: PropTypes.string,
  /**
   * Defines the label type.
   * `floating` type shows a floating label on top of the form panel whilst `title` shows a title-like label
   */
  labelType: PropTypes.oneOf(['floating', 'title']),
  /**
   * Defines the title render component
   */
  LabelRender: PropTypes.elementType,
};


FormPanel.defaultProps = {
  label: undefined,
  labelType: 'floating',
  LabelRender: 'span',
};

export default React.memo(FormPanel);
