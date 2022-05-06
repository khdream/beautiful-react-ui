import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../Typography/Title/Title';

/**
 * This component returns the notification content
 */
const NotificationContent = ({ title, content }) => (
  <div className="notification-content">
    {title && <Title size="base" wordBreak="all">{title}</Title>}
    {content}
  </div>
);

NotificationContent.propTypes = {
  /**
   * A title
   */
  title: PropTypes.string,
  /**
   * The message to show into the notification
   */
  content: PropTypes.string.isRequired,
};

NotificationContent.defaultProps = {
  title: null,
};

export default NotificationContent;
