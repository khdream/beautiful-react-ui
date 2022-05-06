import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarLink from './SidebarLink';
import Tooltip from '../../Elements/Tooltip';
import { IconProp, makeIconFromProp } from '../../../shared';

import './sidebar-item.scss';

/**
 * Sidebar navigation item
 */
const SidebarItem = (props) => {
  const { text, to, icon, current, LinkRender, ElementRender, onClick, className, orientation, ...rest } = props;
  const [tooltipVisible, setTooltipVisibility] = useState(false);

  const classList = useMemo(() => classNames('bi bi-sidebar-nav-item', {
    'selected-sidebar-item': current,
  }, className), [current, className]);

  const handleTooltipToggle = useCallback(() => {
    setTooltipVisibility(!tooltipVisible);
  }, [tooltipVisible]);

  return (
    <ElementRender className={classList} {...rest}>
      <LinkRender to={to} onClick={onClick}>
        {icon && (
          <span className="bi-sidebar-icon">
            {makeIconFromProp(icon)}
          </span>
        )}
        <span className="bi-sidebar-item-content">
          {text}
        </span>
        <Tooltip
          isOpen={tooltipVisible}
          onToggle={handleTooltipToggle}
          placement={orientation === 'left' ? 'right-center' : 'left-center'}
          trigger={(
            <div className="bi-sidebar-item-shrunk">
              {!icon && typeof text === 'string' && (<span className="shrunk-text">{text.charAt(0)}</span>)}
              {icon && makeIconFromProp(icon)}
            </div>
          )}
        >
          {text}
        </Tooltip>
      </LinkRender>
    </ElementRender>
  );
};


SidebarItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: IconProp,
  current: PropTypes.bool,
  LinkRender: PropTypes.elementType,
  onClick: PropTypes.func,
  orientation: PropTypes.oneOf(['left', 'right']),
  ElementRender: PropTypes.elementType,
};

SidebarItem.defaultProps = {
  to: undefined,
  icon: undefined,
  current: false,
  LinkRender: SidebarLink,
  onClick: undefined,
  orientation: 'left',
  ElementRender: 'li',
};

export default React.memo(SidebarItem);
