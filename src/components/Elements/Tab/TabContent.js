import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * This component is used to  render the content.
 */
const TabContent = (props) => {
  const { active, title, children, className, ...rest } = props;
  const classList = classNames('tab-content', {
    'tab-content-show': active,
  }, className);

  return (
    <div className={classList} {...rest}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

TabContent.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
};

TabContent.defaultProps = {
  children: undefined,
  active: false,
  title: null,
};

export default React.memo(TabContent);
