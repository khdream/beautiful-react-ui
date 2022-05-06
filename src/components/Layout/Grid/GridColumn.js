import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import checkColumnSize from './checkColumnSize';

/**
 * A single column component
 */
const GridColumn = (props) => {
  const {
    children, size, sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl, className, selfAlign,
  } = props;
  const classList = classNames('bi bi-grid-column', {
    [`col-size-${size}`]: !!size,
    [`bi-offset-${offset}`]: !!offset && offset <= 12,
    [`bi-col-sm-${sm}`]: !!sm && sm <= 12,
    [`bi-col-md-${md}`]: !!md && md <= 12,
    [`bi-col-lg-${lg}`]: !!lg && lg <= 12,
    [`bi-col-xl-${xl}`]: !!xl && xl <= 12,
    [`bi-offset-sm-${offsetSm}`]: !!offsetSm && offsetSm <= 12,
    [`bi-offset-md-${offsetMd}`]: !!offsetMd && offsetMd <= 12,
    [`bi-offset-lg-${offsetLg}`]: !!offsetLg && offsetLg <= 12,
    [`bi-offset-xl-${offsetXl}`]: !!offsetXl && offsetXl <= 12,
    [`self-${selfAlign}`]: !!selfAlign,
  }, className);

  // checks the column total size
  checkColumnSize(sm, md, lg, xl, offset, offsetSm, offsetMd, offsetLg, offsetXl);

  return (<div className={classList}>{children}</div>);
};

const ColumnWidth = PropTypes.oneOf([
  1, '1',
  2, '2',
  3, '3',
  4, '4',
  5, '5',
  6, '6',
  7, '7',
  8, '8',
  9, '9',
  10, '10',
  11, '11',
  12, '12',
]);

GridColumn.propTypes = ({
  /**
   * Accepts a value from 1 to 12 to define the column width
   */
  size: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column width on small screen devices
   */
  sm: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column width on medium screen devices
   */
  md: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column width on large screen devices
   */
  lg: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column width on extra-large screen devices
   */
  xl: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column padding-left
   */
  offset: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column padding-left on small screen devices
   */
  offsetSm: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column padding-left on medium screen devices
   */
  offsetMd: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column padding-left on large screen devices
   */
  offsetLg: ColumnWidth,
  /**
   * Accepts a value from 1 to 12 to define the column padding-left on extra-large screen devices
   */
  offsetXl: ColumnWidth,
  /**
   * Defines the position of the the content along its container's cross axis.
   */
  selfAlign: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'auto']),
  /**
   * @ignore
   */
  className: PropTypes.string,
});

GridColumn.defaultProps = ({
  size: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  offset: undefined,
  offsetSm: undefined,
  offsetMd: undefined,
  offsetLg: undefined,
  offsetXl: undefined,
  selfAlign: 'auto',
  className: undefined,
});

export default React.memo(GridColumn);
