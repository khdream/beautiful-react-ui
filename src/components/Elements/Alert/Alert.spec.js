import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Alert from '.';

describe('Alert component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('it should render without explode', () => {
    const { container } = render(<Alert>some text here</Alert>);

    should.exist(container);
    expect(container.querySelector('.bi.bi-alert')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Alert>some test here</Alert>);
    // using div just to test if it has default classes
    const alert = container.querySelector('div');

    expect(alert.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-alert', 'alert-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Alert id="label">some text here</Alert>);
    const alert = container.querySelector('.bi.bi-alert');

    expect(alert.id).to.equal('label');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Alert className="foo">some text here</Alert>);
    const alert = container.querySelector('.bi.bi-alert');

    expect(alert.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should render the given child string', () => {
    const { getByText } = render(<Alert>some text here</Alert>);

    expect(getByText(/some text here/).textContent).to.equal('some text here');
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Alert style={{ margin: '10px' }}>some text here</Alert>);
    const alert = container.querySelector('.bi.bi-alert');

    expect(alert.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to change different colors', () => {
    const { container, rerender } = render(<Alert color="secondary">some text here</Alert>);
    const alert = container.querySelector('.bi.bi-alert');

    expect(alert.getAttribute('class').split(' ')).to.include.members(['alert-secondary']);
    expect(alert.getAttribute('class').split(' ')).to.not.include.members(['alert-default']);

    rerender(<Alert color="info">some text here</Alert>);
    expect(alert.getAttribute('class').split(' ')).to.include.members(['alert-info']);
    expect(alert.getAttribute('class').split(' ')).to.not.include.members(['alert-secondary']);

    rerender(<Alert>some text here</Alert>);
    expect(alert.getAttribute('class').split(' ')).to.include.members(['alert-default']);
    expect(alert.getAttribute('class').split(' ')).to.not.include.members(['alert-info']);
  });

  it('should perform the onClose function when clicking on the x button', () => {
    const onCloseSpy = sinon.spy();
    const { container } = render(<Alert onClose={onCloseSpy}>some text here</Alert>);
    const alertButton = container.querySelector('.bi.bi-alert').querySelector('.alert-button');

    expect(alertButton).to.exist;
    expect(alertButton.tagName).to.equal('BUTTON');

    fireEvent.click(alertButton);
    const firstCallArgs = onCloseSpy.args[0];

    expect(onCloseSpy.callCount).to.equal(1);
    expect(firstCallArgs[0]).to.exist;
  });
});
