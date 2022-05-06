import React, { useMemo, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Caret from '../../Elements/_Caret';
import Button from '../../Elements/Button';
import { makeCallback } from '../../../shared';

/**
 * AccordionContent wraps a given content
 */
const AccordionContent = (props) => {
  const {
    internalId, children, active, title, onChange, ButtonRender, ContentRender, ElementRender, CaretRender, ...rest
  } = props;
  const classList = useMemo(() => classNames('bi', 'bi-accordion-item', {
    'bi-item-open': active,
  }), [active]);

  const onClickHandler = useCallback(makeCallback(onChange, internalId), [onChange, internalId]);

  return (
    <ElementRender className={classList} {...rest}>
      <ButtonRender fluid color="transparent" onClick={onClickHandler} className="bi-accordion-toggle">
        <CaretRender />
        {title}
      </ButtonRender>
      <ContentRender className="bi-accordion-content">
        {children}
      </ContentRender>
    </ElementRender>
  );
};

AccordionContent.propTypes = {
  internalId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.elementType,
  ButtonRender: PropTypes.elementType,
  ContentRender: PropTypes.elementType,
  ElementRender: PropTypes.elementType,
  CaretRender: PropTypes.elementType,
};

AccordionContent.defaultProps = {
  active: false,
  title: undefined,
  onChange: undefined,
  ButtonRender: Button,
  ContentRender: 'div',
  ElementRender: 'div',
  CaretRender: Caret,
};

export default React.memo(AccordionContent);
