import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbMenu from './BreadcrumbMenu';
import { IconProp } from '../../../shared';

/**
 * CollapsedBreadcrumbs is a sub-component of Breadcrumbs.
 * It handle the business-logic of the collapsed items.
 */
const CollapsedBreadcrumbs = (props) => {
  const { items, maxDisplayedItems } = props;
  const hidingItemsNum = items.length - maxDisplayedItems;
  const hidingItems = items.slice(0, hidingItemsNum);
  const displayingItems = items.slice(hidingItemsNum);

  return (
    <>
      <BreadcrumbMenu items={hidingItems} />
      {(displayingItems.map((item) => (
        item.render
          ? item.render(item)
          : <BreadcrumbItem path={item.path} label={item.label} icon={item.icon} key={item.path || item.label} />
      )))}
    </>
  );
};


CollapsedBreadcrumbs.propTypes = {
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
  /*
   * Defines the item numbers to display
   */
  maxDisplayedItems: PropTypes.number.isRequired,
};


export default React.memo(CollapsedBreadcrumbs);
