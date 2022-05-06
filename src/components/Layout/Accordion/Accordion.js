import React, { Children, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color, checkOnAllowedChildren } from '../../../shared';
import AccordionContent from './AccordionContent';

import './accordion.scss';

/**
 * Enrich Accordion child
 */
const enrichChild = (props) => (child, index) => {
  checkOnAllowedChildren(child, [AccordionContent], 'Accordion');

  return React.cloneElement(child, {
    internalId: index,
    active: Array.isArray(props.active) ? props.active.includes(index) : props.active === index,
    onChange: props.onChange,
  });
};

/**
 * An Accordion component allows the user to toggle between the contents by showing once per time.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Accordion = React.memo((props) => {
  const { children, color, className, ElementRender, ...rest } = props;
  const classList = useMemo(() => (
    classNames('bi bi-accordion', `bi-accordion-${color}`, className)
  ), [color, className]);

  return (
    <ElementRender className={classList} {...rest}>
      {Children.map(children, enrichChild(props))}
    </ElementRender>
  );
});

Accordion.propTypes = {
  /**
   * Defines the current active tab index
   */
  active: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  /**
   * The callback to be performed on content change
   */
  onChange: PropTypes.func,
  /**
   * Defines the color of the accordion, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /**
   * A render function to be used as the accordion element instead of the default one
   */
  ElementRender: PropTypes.elementType,
};

Accordion.defaultProps = {
  active: undefined,
  onChange: undefined,
  color: 'default',
  ElementRender: 'div',
};

// shortcut to AccordionContent so that we can use it as the following: `Accordion.Content`
Accordion.Content = AccordionContent;

export default Accordion;
