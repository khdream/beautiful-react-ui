import React from 'react';
import PropTypes from 'prop-types';

import './sidebar-divider.scss';

// eslint-disable-next-line react/prop-types
const SidebarDivider = ({ orientation, ElementRender, ...props }) => (
  <ElementRender className="bi bi-sidebar-divider" {...props} />
);

SidebarDivider.propTypes = {
  ElementRender: PropTypes.elementType,
};

SidebarDivider.defaultProps = {
  ElementRender: 'li',
};

export default React.memo(SidebarDivider);
