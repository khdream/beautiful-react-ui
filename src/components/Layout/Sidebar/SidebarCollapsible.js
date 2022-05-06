import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarLink from './SidebarLink';
import Caret from '../../Elements/_Caret';
import { IconProp, makeIconFromProp } from '../../../shared';

import './sidebar-collapsible.scss';

/* eslint-disable no-param-reassign */
const animateToClose = (element) => {
  element.style.height = '0px';
};

const animateToOpen = (element) => {
  element.style.height = `${element.scrollHeight}px`;
};
/* eslint-enable no-param-reassign */

/**
 * Collapsible
 */
// eslint-disable-next-line react/prop-types
const SidebarCollapsible = ({ orientation, ...props }) => {
  const { text, icon, LinkRender, ElementRender, ListRender, children, current, showOpen, className, ...rest } = props;
  const collapsibleRef = useRef();
  const [isOpen, setIsOpen] = useState(showOpen || !!current);

  const classList = useMemo(() => classNames('bi bi-sidebar-nav-item sidebar-collapsible', {
    'sidebar-collapsible-open': isOpen,
  }, className), [isOpen, className]);

  const handleClick = useCallback((event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (current) {
      setIsOpen(true);
    }
  }, [current]);

  useEffect(() => {
    if (collapsibleRef.current) {
      const animatingFunction = !isOpen ? animateToClose : animateToOpen;
      animatingFunction(collapsibleRef.current);
    }
  }, [isOpen, collapsibleRef.current]);

  return (
    <ElementRender className={classList} {...rest}>
      <LinkRender onClick={handleClick} to="#">
        {icon && (<span className="bi-sidebar-icon">{makeIconFromProp(icon)}</span>)}
        <span className="bi-sidebar-item-content">{text}</span>
        <div className="bi-sidebar-item-shrunk">
          {!icon && typeof text === 'string' && (<span className="shrunk-text">{text.charAt(0)}</span>)}
          {icon && makeIconFromProp(icon)}
        </div>
        <Caret />
      </LinkRender>
      <ListRender className="sidebar-collapsible-content" ref={collapsibleRef}>
        {children}
      </ListRender>
    </ElementRender>
  );
};

SidebarCollapsible.propTypes = {
  text: PropTypes.string.isRequired,
  icon: IconProp,
  current: PropTypes.bool,
  LinkRender: PropTypes.elementType,
  showOpen: PropTypes.bool,
  ElementRender: PropTypes.elementType,
  ListRender: PropTypes.elementType,
};

SidebarCollapsible.defaultProps = {
  icon: undefined,
  current: false,
  LinkRender: SidebarLink,
  showOpen: false,
  ElementRender: 'li',
  ListRender: 'ul',
};

export default React.memo(SidebarCollapsible);
