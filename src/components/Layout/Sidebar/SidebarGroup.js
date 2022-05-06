import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconProp, makeIconFromProp } from '../../../shared';

import './sidebar-group.scss';

/**
 * SidebarGroup
 */
// eslint-disable-next-line react/prop-types
const SidebarGroup = ({ orientation, ...props }) => {
  const { text, icon, children, ElementRender, ItemRender, ListRender, className, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-sidebar-nav-item sidebar-group', className), [className]);

  return (
    <ElementRender className={classList} {...rest}>
      <ItemRender>
        {icon && (<span className="bi-sidebar-icon">{makeIconFromProp(icon)}</span>)}
        <span className="bi-sidebar-item-content">{text}</span>
        <div className="bi-sidebar-item-shrunk">
          {!icon && typeof text === 'string' && (<span className="shrunk-text">{text.charAt(0)}</span>)}
          {icon && makeIconFromProp(icon)}
        </div>
      </ItemRender>
      <ListRender className="sidebar-group-content">
        {children}
      </ListRender>
    </ElementRender>
  );
};

SidebarGroup.propTypes = {
  text: PropTypes.string.isRequired,
  icon: IconProp,
  ElementRender: PropTypes.elementType,
  ListRender: PropTypes.elementType,
  ItemRender: PropTypes.elementType,
};

SidebarGroup.defaultProps = {
  icon: undefined,
  ElementRender: 'li',
  ListRender: 'ul',
  ItemRender: 'span',
};

export default React.memo(SidebarGroup);
