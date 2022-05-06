import React from 'react';
import PropTypes from 'prop-types';
import { makeIconFromProp, IconProp, warn } from '../../../shared';

/**
 * BreadcrumbItems is a sub-component of Breadcrumbs.
 * It handle the business-logic of a single breadcrumb.
 */
const BreadcrumbItem = (props) => {
  const { path, label, icon } = props;

  if (!label && !icon) {
    warn('One of your breadcrumb items has been wiped out to avoid bugs or glitches as it has no label nor icon');
    return null;
  }

  return (
    <li className="bi breadcrumb-item">
      {!!path && (
        <a href={path}>
          {!!icon && makeIconFromProp(icon)}
          {label}
        </a>
      )}
      {!path && (
        <>
          {!!icon && makeIconFromProp(icon)}
          {label}
        </>
      )}
    </li>
  );
};


BreadcrumbItem.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  icon: IconProp,
};

BreadcrumbItem.defaultProps = {
  path: undefined,
  label: undefined,
  icon: undefined,
};

export default React.memo(BreadcrumbItem);
