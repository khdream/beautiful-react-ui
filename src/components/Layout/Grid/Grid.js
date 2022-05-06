import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GridColumn from './GridColumn';

import './grid.scss';

/**
 * Grid component
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Grid = React.memo(({ children, reversed, itemsAlign, className, ...props }) => {
  const classList = classNames('bi bi-grid', {
    [`items-${itemsAlign}`]: !!itemsAlign,
    reversed,
  }, className);

  return (<div className={classList} {...props}>{children}</div>);
});

Grid.propTypes = {
  /**
   * Defines weather the grid should reverse its rows or not
   */
  reversed: PropTypes.bool,
  /**
   * Defines the position of the column along the grid's cross axis.
   */
  itemsAlign: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
};

Grid.defaultProps = {
  /**
   * this props will reverse the grid's items direction
   */
  reversed: false,
  /**
   * this props will align the grid's items
   */
  itemsAlign: 'start',
};

Grid.Column = GridColumn;

export default Grid;
