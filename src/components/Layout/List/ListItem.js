import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Elements/Icon';
import Checkbox from '../../Forms/Checkbox';
import { IconProp, Color, makeIconFromProp } from '../../../shared';
import getCheckboxProps from './getCheckboxFurtherProps';
import getDraggingProps from './getDraggingFurtherProps';

/**
 * Single List item
 */
const ListItem = (props) => {
  const {
    checkbox, onChange, color, value, icon, draggable, onDragStart, onDragEnd, children, className, ...rest
  } = props;
  const checkboxProps = useMemo(() => getCheckboxProps(checkbox, onChange, value), [checkbox, onChange, value]);
  const draggingProps = useMemo(() => (
    getDraggingProps(draggable, onDragStart, onDragEnd)
  ), [draggable, onDragStart, onDragEnd]);

  const classList = classNames('bi bi-list-item', `bi-list-item-${color}`, {
    'bi-list-checkable': checkbox,
    'bi-list-item-checked': value,
    'bi-list-item-draggable': draggable,
  }, className);

  return (
    <li className={classList} {...checkboxProps} {...draggingProps} {...rest}>
      {icon && makeIconFromProp(icon, { className: 'bi-list-item-icon' })}
      <span className="bi-list-item-content">
        {children}
      </span>
      {checkbox && <Checkbox onChange={onChange} value={value} color={color} className="bi-item-checkbox" />}
      {draggable && <Icon name="ellipsis-v" className="bi-item-dragicon" />}
    </li>
  );
};

ListItem.propTypes = {
  icon: IconProp,
  checkbox: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  color: Color,
  draggable: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
};

ListItem.defaultProps = {
  icon: undefined,
  checkbox: false,
  onChange: undefined,
  value: undefined,
  color: 'default',
  draggable: false,
  onDragStart: undefined,
  onDragEnd: undefined,
};

export default React.memo(ListItem);
