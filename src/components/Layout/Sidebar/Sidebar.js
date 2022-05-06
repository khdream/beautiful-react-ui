import React, { useMemo, Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color, IconProp, checkOnAllowedChildren } from '../../../shared';
import SidebarItem from './SidebarItem';
import SidebarCollapsible from './SidebarCollapsible';
import SidebarGroup from './SidebarGroup';
import SidebarHeader from './SidebarHeader';
import SidebarDivider from './SidebarDivider';

// styles
import './sidebar.scss';

const enrichChild = (child, orientation) => {
  checkOnAllowedChildren(child, [SidebarCollapsible, SidebarDivider, SidebarItem], 'Sidebar');

  return React.cloneElement(child, { orientation });
};

/**
 * A Sidebar component is a left or right side panel used to provide navigational information to the user.<br />
 * It can either be permanently on-screen or toggled off-screen by a navigation menu icon.<br />
 *
 * It provides access to its sub-components by the following shortcuts:<br />
 *
 * - `Sidebar.Item`: defines a single sidebar item
 * - `Sidebar.Collapsible`: groups together components of type Sidebar.Item and/or Sidebar.Divider
 * - `Sidebar.Divider`: shows a divider line between items
 */
// the React.memo has been used here rather than on the export line to avoid wrapping the shortcut.
const Sidebar = React.memo((props) => {
  const {
    isOpen, onToggle, title, titleColor, headerLogo, showToggle, toggleIcon, accent, orientation,
    type, transitionType, className, children, HeaderRender, ElementRender, NavRender, ...rest
  } = props;

  // defines class list
  const classList = useMemo(() => classNames('bi bi-sidebar', {
    'sidebar-open': isOpen,
    [`sidebar-${accent}`]: !!accent,
    [`sidebar-${orientation}`]: !!orientation,
    [`sidebar-${type}`]: !!type,
    [`sidebar-${transitionType}`]: !!transitionType,
  }, className), [isOpen, type, accent, orientation, transitionType, className]);

  return (
    <ElementRender className={classList} {...rest}>
      <HeaderRender
        title={!title && !headerLogo ? 'Sidebar' : title}
        titleColor={titleColor}
        showToggle={showToggle}
        toggleIcon={toggleIcon}
        logo={headerLogo}
        onToggle={onToggle}
      />
      <NavRender className="bi-sidebar-navigation">
        <ul>
          {Children.map(children, (child) => enrichChild(child, orientation))}
        </ul>
      </NavRender>
    </ElementRender>
  );
});

Sidebar.propTypes = {
  /**
   * Defines whether the sidebar is open or closed
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * The handler to be performed when clicking on the sidebar toggle
   */
  onToggle: PropTypes.func,
  /**
   * Defines the sidebar accent colour,
   */
  accent: Color,
  /**
   * Defines the header's title
   */
  title: PropTypes.string,
  /**
   * Defines the header's title color
   */
  titleColor: Color,
  /**
   * Any React element to be placed as a logo
   */
  headerLogo: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /**
   * Set the sidebar's toggle icon (the toggle is the button at the sidebar's top)
   */
  toggleIcon: IconProp,
  /**
   * Defines whether to sidebar's toggle is shown or not
   */
  showToggle: PropTypes.bool,
  /**
   * Defines whether the sidebar left or right orientated
   */
  orientation: PropTypes.oneOf(['left', 'right']),
  /**
   * Defines the sidebar's type
   */
  type: PropTypes.oneOf(['shrinkable', 'offcanvas']),
  /**
   * Defines the sidebar transition should be by translate the sidebar or its left/right margin
   */
  transitionType: PropTypes.oneOf(['translate', 'margin']),
  /**
   * A renderer to replace the standard sidebar Header component
   */
  HeaderRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard sidebar element
   */
  ElementRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard nav element
   */
  NavRender: PropTypes.elementType,
};

Sidebar.defaultProps = {
  onToggle: undefined,
  accent: 'primary',
  title: undefined,
  titleColor: 'default',
  headerLogo: undefined,
  toggleIcon: 'bars',
  showToggle: true,
  HeaderRender: SidebarHeader,
  orientation: 'left',
  type: 'shrinkable',
  transitionType: 'translate',
  ElementRender: 'aside',
  NavRender: 'nav',
};


Sidebar.Item = SidebarItem;
Sidebar.Collapsible = SidebarCollapsible;
Sidebar.Divider = SidebarDivider;
Sidebar.Group = SidebarGroup;

export default Sidebar;
