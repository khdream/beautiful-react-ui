import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from '../../Elements/_Portal';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { makeCallback, checkOnAllowedChildren } from '../../../shared';

import './modal.scss';

// this function warns if the provided children are not in the Modal.* domain
const warnIfNotInDomain = (child) => {
  checkOnAllowedChildren(child, [ModalBody, ModalFooter, ModalTitle], 'Modal');

  return child;
};

/**
 * A Modal component shows its children contents positioned over everything else in the document.
 */
// the React.memo has been used here rather than on the export line (like other cases) to avoid wrapping the shortcut.
const Modal = React.memo((props) => {
  const {
    children, className, isOpen, centered, size, animation, onBackdropClick, backdropRender, onShow, ...rest
  } = props;

  // this effect is used to run onShow prop only when modal shows up
  useEffect(() => {
    if (onShow && isOpen === true) {
      onShow();
    }
  }, [isOpen]);

  const classList = classNames('bi bi-modal', {
    'bi-modal-sm': size === 'small',
    'bi-modal-lg': size === 'large',
    'bi-anim-fade-in': animation === 'fade',
    'bi-anim-zoom-in': animation === 'zoom',
    'bi-anim-slide-right': animation === 'slideRight',
    'bi-anim-slide-left': animation === 'slideLeft',
    'bi-anim-slide-bottom': animation === 'slideBottom',
    'bi-anim-slide-top': animation === 'slideTop',
  }, className);

  return (
    <Portal id="bi-modals">
      {isOpen && (
        <div className={classNames('bi-modal-wrapper', { 'center-modals': centered })}>
          {!backdropRender && (
            <div role="presentation" onClick={makeCallback(onBackdropClick)} className="bi-backdrop" />
          )}
          {backdropRender && backdropRender(props)}
          <div className={classList} {...rest}>
            {Children.map(children, warnIfNotInDomain)}
          </div>
        </div>
      )}
    </Portal>
  );
});

Modal.propTypes = {
  /**
   * This prop defines whether the modal is shown or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
  /**
   * Centered prop center the modal to place it in the middle of the screen viewport.
   */
  centered: PropTypes.bool,
  /**
   * It defines the modal's dimension
   */
  size: PropTypes.string,
  /**
   * It defines what kind of animation should be performed
   */
  animation: PropTypes.oneOf(['none', 'fade', 'zoom', 'slideRight', 'slideLeft', 'slideBottom', 'slideTop']),
  /**
   * If defined, this function will be run when clicking on backdrop
   */
  onBackdropClick: PropTypes.func,
  /**
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
};

Modal.defaultProps = {
  onShow: undefined,
  centered: false,
  size: 'default',
  animation: 'zoom',
  backdropRender: undefined,
  onBackdropClick: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
