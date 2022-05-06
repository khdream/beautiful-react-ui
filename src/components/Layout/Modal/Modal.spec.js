import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should accept an "id" prop', () => {
    render(
      <Modal isOpen id="foo">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');

    expect(modal.id).to.equal('foo');
  });

  it('should have default classes', () => {
    render(
      <Modal isOpen>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi-modal-wrapper > div + div');

    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-modal']);
  });

  it('should allow to define custom style', () => {
    render(
      <Modal isOpen style={{ margin: '10px' }}>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');

    expect(modal.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should have a backdrop', () => {
    render(
      <Modal isOpen>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const backdrop = document.querySelector('#bi-modals .bi-backdrop');

    expect(backdrop).to.exist;
  });

  it('should not render the modal component if the \'isOpen\' prop is set to false', () => {
    render(
      <Modal isOpen={false}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(document.querySelector('#bi-modals .bi.bi-modal')).to.not.exist;
  });

  it('should accept a \'centered\' prop', () => {
    render(
      <Modal isOpen centered>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modalWrapper = document.querySelector('#bi-modals .bi-modal-wrapper');

    expect(modalWrapper.getAttribute('class').split(' ')).to.include.members(['center-modals']);
  });

  it('should accept a \'size\' prop', () => {
    const { rerender } = render(
      <Modal isOpen size="small">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');

    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi-modal-sm']);

    rerender(
      <Modal isOpen size="large">
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi-modal-lg']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['bi-modal-sm']);

    rerender(
      <Modal isOpen>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['bi-modal-lg']);
  });


  it('should accept the \'animation\' prop', () => {
    const { rerender } = render(
      <Modal isOpen animation="zoom">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    const modal = document.querySelector('#bi-modals .bi.bi-modal');
    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi-anim-zoom-in']);

    rerender(
      <Modal isOpen animation="slideTop">
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );

    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi-anim-slide-top']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['bi-anim-zoom-in']);

    rerender(
      <Modal isOpen>
        <Modal.Title>Amazing modal title</Modal.Title>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
        <Modal.Footer />
      </Modal>,
    );
    expect(modal.getAttribute('class').split(' ')).to.include.members(['bi-anim-zoom-in']);
    expect(modal.getAttribute('class').split(' ')).to.not.include.members(['bi-anim-slide-top']);
  });

  it('the \'onBackdropClick\' prop should be performed when clicking on backdrop', () => {
    const onBackdropClickSpy = sinon.spy();

    render(
      <Modal isOpen onBackdropClick={onBackdropClickSpy}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const backdrop = document.querySelector('#bi-modals .bi-backdrop');

    fireEvent.click(backdrop);

    expect(onBackdropClickSpy.calledOnce).to.be.equal(true);
  });

  it('should render a custom backdrop if provided', () => {
    const CustomBackdrop = () => (
      <div className="custom-backdrop">
        Custom backdrop
      </div>
    );

    render(
      <Modal isOpen backdropRender={CustomBackdrop}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    const modalWrapper = document.querySelector('#bi-modals');
    const modalOriginalBackdrop = modalWrapper.querySelector('.modal-backdrop');
    expect(modalOriginalBackdrop).to.not.exist;

    const customBackdrop = modalWrapper.querySelector('.custom-backdrop');
    expect(customBackdrop).to.exist;
  });


  it('should perform the \'onShow\' callback, if provided, when showing the modal', () => {
    const onShowSpy = sinon.spy();

    render(
      <Modal isOpen onShow={onShowSpy}>
        <Modal.Body>
          Zombie ipsum brains reversus ab cerebellum viral...
        </Modal.Body>
      </Modal>,
    );

    expect(onShowSpy.calledOnce).to.be.equal(true);
  });
});
