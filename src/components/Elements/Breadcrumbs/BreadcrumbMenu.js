import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { IconProp } from '../../../shared';
import DropDown from '../DropDown';

/**
 * BreadcrumbHiddenItems is a sub-component of Breadcrumbs.
 * It handle the business-logic of the hidden breadcrumbs list.
 */
const BreadcrumbMenu = (props) => {
  const { items } = props;
  const [shown, setIsShown] = useState(false);

  const Trigger = (
    <Button icon="ellipsis-v" color="transparent" outline size="small" className="bi-breadcrumbs-menu-button" />
  );

  const onToggleHandler = useCallback(() => {
    setIsShown(!shown);
  }, [shown]);

  return (
    <li className="bi breadcrumb-item breadcrumb-menu">
      <DropDown trigger={Trigger} isShown={shown} onToggle={onToggleHandler} placement="bottom-left">
        {items.map((item) => {
          if (item.render) {
            return item.render();
          }

          return <DropDown.Link href={item.path} icon={item.icon}>{item.label}</DropDown.Link>;
        })}
      </DropDown>
    </li>
  );
};


BreadcrumbMenu.propTypes = {
  /**
   * Defines the items to be shown within a dropdown menu
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    label: PropTypes.string,
    icon: IconProp,
    render: PropTypes.func,
  })).isRequired,
};


export default React.memo(BreadcrumbMenu);
