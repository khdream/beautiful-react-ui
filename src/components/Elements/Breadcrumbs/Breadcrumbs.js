import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color, IconProp, warn } from '../../../shared';
import BreadcrumbItem from './BreadcrumbItem';
import CollapsedBreadcrumbs from './CollapsedBreadcrumbs';

import './breadcrumbs.scss';

/**
 * Breadcrumbs component is used to show a page hierarchy.
 * Defining clickable paths helps the user navigating your app.
 */
const Breadcrumbs = (props) => {
  const { items, color, maxDisplayedItems, className, ...rest } = props;
  const classList = classNames(`bi bi-breadcrumbs breadcrumbs-${color}`, className);
  const itemsToHide = maxDisplayedItems ? parseInt(maxDisplayedItems, 10) : undefined;

  // Returns a warning massage if the number of displayed items is bigger than the items themselves.
  if (maxDisplayedItems > items.length) {
    warn('It is no possible to show an items number bigger than the items provided');
    return null;
  }

  return (
    <nav className={classList} {...rest}>
      <ol>
        {itemsToHide && <CollapsedBreadcrumbs items={items} maxDisplayedItems={maxDisplayedItems} key="u" />}
        {!itemsToHide && items.map((item) => (
          item.render
            ? item.render(item)
            : <BreadcrumbItem path={item.path} label={item.label} icon={item.icon} key={item.path || item.label} />
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  /**
   * Defines the items type, it must be an array of object, with label required.
   * The breadcrumb component accept an array of values, in order to show the path of pages.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: IconProp,
    render: PropTypes.func,
  })).isRequired,
  /**
   * Defines the link color of breadcrumbs, can be: `default`, `primary`, `secondary`, `info`, `warning`, `success`,
   * `danger`.
   * @default primary
   */
  color: Color,
  /*
  * Defines how many items should be displayed into the breadcrumbs
  */
  maxDisplayedItems: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Breadcrumbs.defaultProps = {
  color: 'primary',
  maxDisplayedItems: undefined,
};

export default React.memo(Breadcrumbs);
