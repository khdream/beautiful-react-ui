import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popover from '../Popover';
import { Placement } from '../../../shared';

import './tooltip.scss';

/**
 * A Tooltip component is a shortcut to a Popover component to be shown on "hover", with a black background
 */
const Tooltip = (props) => {
  //  I'm disabling eslint on the next line is because I want to remove `action` and `title` from the props
  // eslint-disable-next-line react/prop-types
  const { action, title, className, ...rest } = props;
  const classList = classNames('bi-tooltip', className);

  return (<Popover action="hover" className={classList} {...rest} />);
};

Tooltip.propTypes = {
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
   * Defines the popup placement
   */
  placement: Placement,
};

Tooltip.defaultProps = {
  isOpen: false,
  placement: 'top-center',
};

export default React.memo(Tooltip);
