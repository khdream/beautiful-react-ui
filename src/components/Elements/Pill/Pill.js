import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './pill.scss';

/**
 * A tiny component for labeling and small counting/notifications
 */
const Pill = (props) => {
  const { className, children, color, href, render, rounded, ...rest } = props;
  const El = href ? 'a' : 'span';

  const classList = classNames('bi bi-pill', `pill-${color}`, {
    'pill-rounded': rounded,
    'linkable-pill': href,
  }, className);

  return (
    <El className={classList} href={href} {...rest}>
      {!render && children}
      {render && render(props)}
    </El>
  );
};

Pill.propTypes = {
  /**
   * Defines the pill's background color, can be `default`, `primary`, `secondary`,
   * `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * Pill can possibly render a link, if this prop is set to a string the resulting tag will change from <span> to <a>.
   */
  href: PropTypes.string,
  /**
   * Indicates the Pill shape.
   * @default true
   */
  rounded: PropTypes.bool,
  /**
   * Accepts a function/component and renders the returning value within the Pill component
   */
  render: PropTypes.func,
  /**
   * @ignore
   */
  children: PropTypes.node,
};


Pill.defaultProps = {
  children: null,
  color: 'default',
  href: undefined,
  render: undefined,
  rounded: true,
};


export default React.memo(Pill);
