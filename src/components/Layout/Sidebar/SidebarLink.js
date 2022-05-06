import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Typography/Link';

/**
 * Sidebar Link
 */
const SidebarLink = ({ to, children, ...rest }) => (<Link href={to} {...rest}>{children}</Link>);

SidebarLink.propTypes = {
  to: PropTypes.string,
};

SidebarLink.defaultProps = {
  to: '#',
};

export default React.memo(SidebarLink);
