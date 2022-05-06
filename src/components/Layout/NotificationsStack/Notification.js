import React from 'react';
import PropTypes from 'prop-types';
import { useConditionalTimeout } from 'beautiful-react-hooks';
import NotificationLeftRender from './NotificationLeftRender';
import NotificationContent from './NotificationContent';
import NotificationRightRender from './NotificationRightRender';
import { IconProp } from '../../../shared';


import './notification.scss';

/**
 * The Notification component is an alert positioned over the document to inform the user about something happening.
 * Usually is a temporary alert
 */
const Notification = (props) => {
  const { onClose, closable, icon, avatar, title, content, timeout } = props;

  // add a timeout to the notification if timeout is define of different from false
  useConditionalTimeout(onClose, timeout, timeout !== false);

  return (
    <div className="bi bi-notification">
      {(icon || avatar) && (
        <NotificationLeftRender icon={icon} avatar={avatar} />
      )}
      <NotificationContent title={title} content={content} />
      {(closable) && (
        <NotificationRightRender onToggle={onClose} />
      )}
    </div>
  );
};

Notification.propTypes = {
  /**
   * This prop will close the notification after certain time, if timeout is defined, or on button click.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * The notification icon: you can pass both a valid Icon component name prop or the instance of an Icon component
   */
  icon: IconProp,
  /**
   * This prop define the avatar that will be shown into notification
   * It should be a string that will be pass to the Avatar component
   */
  avatar: PropTypes.string,
  /**
   * The notification title
   */
  title: PropTypes.string,
  /**
   * The notification content
   */
  content: PropTypes.string.isRequired,
  /**
   * This prop will show a closable button to close the notification.
   */
  closable: PropTypes.bool,
  /**
   * This prop defines after how many second the notification will disappear.
   */
  timeout: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
};

Notification.defaultProps = {
  icon: undefined,
  avatar: null,
  title: undefined,
  closable: true,
  timeout: 2000,
};

export default Notification;
