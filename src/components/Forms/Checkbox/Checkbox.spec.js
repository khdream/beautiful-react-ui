import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('it should render without explode', () => {
    const { container } = render(<Checkbox value={false} />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-checkbox')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Checkbox value={false} />);
    // using div just to test if it has default classes
    const checkboxEl = container.querySelector('div');

    expect(checkboxEl.classList.contains('bi')).to.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox')).to.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox-default')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Checkbox value={false} id="foo" />);
    const inputEl = container.querySelector('.bi.bi-checkbox input');

    expect(inputEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Checkbox value={false} className="foo" />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Checkbox value={false} style={{ margin: '10px' }} />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should pass the value prop down to the actual input tag', () => {
    const { container } = render(<Checkbox value={false} />);
    const actualInputTag = container.querySelector('.bi.bi-checkbox input');

    expect(actualInputTag.checked).to.equal(false);
  });

  it('should allow to define the checkbox color', () => {
    const { container, rerender } = render(<Checkbox value={false} color="primary" />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    expect(checkboxEl.classList.contains('bi-checkbox-primary')).to.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox-default')).to.not.be.true;

    rerender(<Checkbox value={false} color="warning" />);
    expect(checkboxEl.classList.contains('bi-checkbox-warning')).to.be.true;

    rerender(<Checkbox value={false} />);
    expect(checkboxEl.classList.contains('bi-checkbox-default')).to.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox-primary')).to.not.be.true;
    expect(checkboxEl.classList.contains('bi-checkbox-warning')).to.not.be.true;
  });

  it('should possibly show a helping text', () => {
    const helpText = 'Help text';
    const { getByText } = render(<Checkbox value={false} helpText={helpText} />);
    const helpTextComponent = getByText(helpText);

    expect(helpTextComponent).to.exist;
    expect(helpTextComponent.classList.contains('bi-helptext')).to.equal(true);
  });

  it('should perform the onChange callback when the checkbox value changes', () => {
    const onChange = sinon.spy();
    const { container } = render(<Checkbox value={false} onChange={onChange} />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    fireEvent.click(checkboxEl);

    wait(() => expect(onChange.called).to.equal(true));
  });

  it('should not perform the onChange callback if the checkbox is disabled', () => {
    const onChange = sinon.spy();
    const { container } = render(<Checkbox value={false} onChange={onChange} disabled />);
    const checkboxEl = container.querySelector('.bi.bi-checkbox');

    fireEvent.click(checkboxEl);

    wait(() => expect(onChange.called).to.equal(false));
  });
});
