import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './link.scss';

/**
 * beautiful-react-ui does not force the developer to use its own styles nor creates extra global rules that can
 * possibly collide with the application's ones.<br/>
 * For this reason, in order to have the consistent style between the UI components and the texts, few typography
 * specialised components has been created.<br/>
 * The typography specialised components are used within the library itself.
 * <br/>
 * Here's the Link component.
 */
const Link = (props) => {
  const { href, color, children, className, ElementRender, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-link', `bi-link-${color}`, className), [color, className]);

  return (<ElementRender href={href} className={classList} {...rest}>{children}</ElementRender>);
};

Link.propTypes = {
  /**
   * Defines the link href
   */
  href: PropTypes.string.isRequired,
  /*
   * Defines the link color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * A renderer to replace the link element
   */
  ElementRender: PropTypes.elementType,
};


Link.defaultProps = {
  color: 'primary',
  ElementRender: 'a',
};

export default React.memo(Link);
