import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './ListItem';
import { Color } from '../../../shared';

import './list.scss';

/**
 * Clones an item by passing the given color prop, if it doesn't exist yet
 */
const assignColor = (item, color) => React.cloneElement(item, { color: item.props.color || color });

/**
 * A List component wraps and formats a series of line items.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const List = React.memo((props) => {
  const { color, condensed, className, bordered, children, ...rest } = props;
  const classList = classNames('bi bi-list', `bi-list-${color}`, {
    'bi-list-condensed': condensed,
    'bi-list-bordered': bordered,
  }, className);

  return (
    <ul className={classList} {...rest}>
      {color ? Children.map(children, (item) => assignColor(item, color)) : children}
    </ul>
  );
});


List.propTypes = {
  /*
   * Defines the list color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /*
   * Shrinks the list items so that it's possible to display more information
   */
  condensed: PropTypes.bool,
  /*
   * Defines whether the list should be bordered or not
   */
  bordered: PropTypes.bool,
};

List.defaultProps = {
  color: 'default',
  condensed: false,
  bordered: false,
};

// shortcut to ListItem so that we can use it as the following: `List.Item`
List.Item = ListItem;

export default List;
