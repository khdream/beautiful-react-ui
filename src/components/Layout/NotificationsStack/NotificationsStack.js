import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash/isEqual';
import Portal from '../../Elements/_Portal';
import Notification from './Notification';
import IconProp from '../../../shared/types/IconProp';

// styles
import './notification-stack.scss';


/**
 * The NotificationsStack component is used to manage notifications appearance.
 * A notification is a tiny customizable modal positioned over everything else in the document.
 */
const NotificationsStack = (props) => {
  const { notifications, onChange, NotificationRender, position, animation, color, ...rest } = props;

  // onClose function will be run on timeout or when closing the notification
  const onClose = (notification) => {
    const nextNotifications = notifications.filter((item) => !isEqual(notification, item));

    onChange(nextNotifications);
  };

  const classList = classNames('bi-notifications-wrapper', {
    [`bi-ns-${position}`]: !!position,
    [`bi-ns-${animation}`]: !!animation,
    [`bi-ns-${color}-color`]: !!color,
  });

  return (
    <Portal id="bi-notification-stack">
      <div className={classList} {...rest}>
        {notifications && notifications.map((item) => (
          <NotificationRender {...item} onClose={() => onClose(item)} key={item.id} />
        ))}
      </div>
    </Portal>
  );
};

NotificationsStack.propTypes = {
  /**
   * This prop defines the array of notifications.
   * Each notification must have an id property in order to have an exactly reference to the notification
   * that is going to be removed.
   * Object description:
   * `id`: unique id to identify the notification into notifications array
   * `content`: the content to show into the notification
   * `title`: the notification title, it will be shown above the content
   * `icon`: the icon to show in the left notification side
   * `avatar`: the avatar to show in the left notification side
   * `timeout`: the notification life time. Could be false if the notification must be close be user input.
   * `closable`: false if the close icon button should be removed. Default is true.
   */
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
    icon: IconProp,
    avatar: PropTypes.string,
    timeout: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    closable: PropTypes.bool,
  })),
  /**
   * This prop is the function that will run on notification close or timeout.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * This prop defines where the notification should be place over the page.
   */
  position: PropTypes.oneOf(['top-center', 'bottom-center', 'top-right', 'top-left', 'bottom-right', 'bottom-left']),
  /**
   * This prop could be use to render a different notification from the default one.
   */
  NotificationRender: PropTypes.elementType,
  /**
   * This prop defines what kind of animation should be performed
   */
  animation: PropTypes.oneOf(['none', 'fade', 'zoom', 'slide-right', 'slide-top', 'slide-left', 'slide-bottom']),
  /**
   * The notification color
   */
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'default']),
};

NotificationsStack.defaultProps = {
  notifications: undefined,
  position: 'top-right',
  NotificationRender: Notification,
  animation: 'slide-right',
  color: 'default',
};

export default React.memo(NotificationsStack);
