import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Elements/Button';
import { Color } from '../../../shared';

import './sidebar-header.scss';

/**
 * Sidebar Header
 */
// eslint-disable-next-line react/prop-types
const SidebarHeader = ({ orientation, ...props }) => {
  const { onToggle, title, titleColor, toggleIcon, showToggle, logo, ...rest } = props;
  const classList = classNames('bi', 'bi-sidebar-header', `sidebar-header-${titleColor}`);

  return (
    <header className={classList} {...rest}>
      <div className="bi-sidbr-head-ctnt">
        {title && <h1>{title}</h1>}
        {logo && <>{logo}</>}
      </div>
      {showToggle && (
        <div className="bi-sidebar-toggle">
          <Button
            icon={toggleIcon}
            color="transparent"
            rounded
            onClick={onToggle}
          />
        </div>
      )}
    </header>
  );
};

SidebarHeader.propTypes = {
  onToggle: PropTypes.func,
  title: PropTypes.string,
  titleColor: Color,
  logo: PropTypes.element,
  toggleIcon: PropTypes.string,
  showToggle: PropTypes.bool,
};

SidebarHeader.defaultProps = {
  onToggle: undefined,
  title: null,
  titleColor: 'default',
  logo: null,
  toggleIcon: 'bars',
  showToggle: true,
};

export default React.memo(SidebarHeader);
