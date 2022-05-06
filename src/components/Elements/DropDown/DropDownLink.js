import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Typography/Link';
import { IconProp, makeIconFromProp } from '../../../shared';

/**
 * Drop down link item
 */
const DropDownLink = (props) => {
  const { href, icon, children } = props;

  return (
    <li className="bi-dd-link">
      <Link href={href}>
        {icon && makeIconFromProp(icon)}
        <span>{children}</span>
      </Link>
    </li>
  );
};

DropDownLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: IconProp,
};

DropDownLink.defaultProps = {
  icon: undefined,
};

export default React.memo(DropDownLink);
