import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Elements/Icon';
import Avatar from '../../Elements/Avatar';
import { IconProp } from '../../../shared';

/**
 * This component handle the notification's left side
 */
const NotificationLeftRender = ({ icon, avatar }) => (
  <div className="notification-left-side">
    {icon && <Icon name={icon} size="large" />}
    {avatar && <Avatar src={avatar} />}
  </div>
);

NotificationLeftRender.propTypes = {
  /**
   * If define, is the icon to show
   */
  icon: IconProp,
  /**
   * If defined, is the avatar to show
   */
  avatar: PropTypes.string,
};

NotificationLeftRender.defaultProps = {
  icon: undefined,
  avatar: undefined,
};

export default NotificationLeftRender;
