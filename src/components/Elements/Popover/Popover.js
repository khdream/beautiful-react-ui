import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FloatingContent from '../FloatingContent';
import { Placement } from '../../../shared';

import './popover.scss';

/**
 * A Popover component is a transient balloon showing its content floating on a given trigger
 * (possibly another component).
 */
const Popover = (props) => {
  const { trigger, isOpen, onToggle, action, title, placement, children, className, ...rest } = props;

  return (
    <FloatingContent
      trigger={trigger}
      onToggle={onToggle}
      isShown={isOpen}
      action={action}
      placement={placement}
      offset={10}
    >
      <div className={classNames('bi bi-popover', className)} {...rest}>
        {title && (<h2 className="bi-popover-title">{title}</h2>)}
        {children}
      </div>
    </FloatingContent>
  );
};


Popover.propTypes = {
  /**
   * Defines the React node to apply the popover to
   */
  trigger: PropTypes.node.isRequired,
  /**
   * Defines the callback to be performed each time the event defined by the `action` prop fires,
   * by default a `click` event
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Defines whether the popover is shown or not
   */
  isOpen: PropTypes.bool,
  /**
   * Defines when to fire the onToggle callback, it can be `click` or `hover`
   */
  action: PropTypes.oneOf(['click', 'hover']),
  /**
   * Define the possible popup title
   */
  title: PropTypes.string,
  /**
   * Defines the popup placement
   */
  placement: Placement,
};

Popover.defaultProps = {
  isOpen: false,
  action: 'click',
  title: null,
  placement: 'top-center',
};

export default React.memo(Popover);
