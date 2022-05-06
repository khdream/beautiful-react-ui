import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Input from '.';

describe('Input component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });


  it('it should render without explode', () => {
    const { container } = render(<Input value="foo" onChange={noop} />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-input')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Input value="foo" onChange={noop} />);
    // using div just to test if it has default classes
    const inputEl = container.querySelector('div');

    expect(inputEl.classList.contains('bi')).to.be.true;
    expect(inputEl.classList.contains('bi-input')).to.be.true;
    expect(inputEl.classList.contains('input-default')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Input value="foo" onChange={noop} id="foo" />);
    const inputEl = container.querySelector('.bi.bi-input input');

    expect(inputEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Input value="foo" onChange={noop} className="foo" />);
    const inputEl = container.querySelector('.bi.bi-input');

    expect(inputEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Input value="foo" onChange={noop} style={{ margin: '10px' }} />);
    const inputEl = container.querySelector('.bi.bi-input');

    expect(inputEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should pass the value prop down to the actual input tag', () => {
    const { container } = render(<Input value="foo" onChange={noop} />);
    const inputEl = container.querySelector('.bi.bi-input input');

    expect(inputEl.value).to.equal('foo');
  });

  it('should perform the onChange callback when the input value changes', () => {
    const onChange = sinon.spy();
    const { container } = render(<Input value="foo" onChange={onChange} />);
    const inputEl = container.querySelector('.bi.bi-input input');

    fireEvent.change(inputEl, { target: { value: 'bar' } });

    wait(() => expect(onChange.called).to.equal(true));
  });

  it('should allow to define the input placeholder', () => {
    const placeholder = 'bar';
    const { container } = render(<Input value="foo" onChange={noop} placeholder="bar" />);
    const inputEl = container.querySelector('.bi.bi-input input');

    expect(inputEl.placeholder).to.equal(placeholder);
  });

  it('should have a default placeholder', () => {
    const { container } = render(<Input value="foo" onChange={noop} />);
    const inputEl = container.querySelector('.bi.bi-input input');

    expect(inputEl.placeholder).to.equal(Input.type.defaultProps.placeholder);
  });

  it('should allow to define set the input disabled', () => {
    const { container } = render(<Input value="foo" onChange={noop} disabled />);
    const inputEl = container.querySelector('.bi.bi-input input');

    expect(inputEl.disabled).to.equal(true);
  });

  it('should possibly show a helping text', () => {
    const helpText = 'Help text';
    const { getByText } = render(<Input value="foo" onChange={noop} helpText={helpText} />);
    const helpTextComponent = getByText(helpText);

    expect(helpTextComponent).to.exist;
    expect(helpTextComponent.classList.contains('bi-helptext')).to.equal(true);
  });

  it('should allow to define the input color', () => {
    const { container, rerender } = render(<Input value="foo" onChange={noop} color="primary" />);
    const inputEl = container.querySelector('.bi.bi-input');

    expect(inputEl.classList.contains('input-primary')).to.be.true;
    expect(inputEl.classList.contains('input-default')).to.not.be.true;

    rerender(<Input value="foo" onChange={noop} color="warning" />);
    expect(inputEl.classList.contains('input-warning')).to.be.true;

    rerender(<Input value="foo" onChange={noop} />);
    expect(inputEl.classList.contains('input-default')).to.be.true;
    expect(inputEl.classList.contains('input-primary')).to.not.be.true;
    expect(inputEl.classList.contains('input-warning')).to.not.be.true;
  });

  it('should allow to define the input size', () => {
    const { container, rerender } = render(<Input value="foo" onChange={noop} size="small" />);
    const inputEl = container.querySelector('.bi.bi-input');

    expect(inputEl.classList.contains('input-sm')).to.be.true;

    rerender(<Input value="foo" onChange={noop} size="large" />);
    expect(inputEl.classList.contains('input-sm')).to.not.be.true;
    expect(inputEl.classList.contains('input-lg')).to.be.true;

    rerender(<Input value="foo" onChange={noop} />);
    expect(inputEl.classList.contains('input-sm')).to.not.be.true;
    expect(inputEl.classList.contains('input-lg')).to.not.be.true;
  });

  it('should possibly render an icon', () => {
    const { container } = render(<Input value="foo" onChange={noop} icon="heart" />);
    const inputEl = container.querySelector('.bi.bi-input');
    const icon = container.querySelector('.bi.bi-input').querySelector('svg');

    expect(inputEl.classList.contains('has-icon')).to.be.true;
    expect(icon.classList.contains('bi')).to.be.true;
    expect(icon.classList.contains('bi-icon')).to.be.true;
    expect(icon.classList.contains('fa-heart')).to.be.true;
  });

  it('should possibly allow to define the icon position', () => {
    const { container } = render(<Input value="foo" onChange={noop} icon="heart" iconPosition="left" />);
    const inputEl = container.querySelector('.bi.bi-input');

    expect(inputEl.classList.contains('icon-left')).to.be.true;
  });
});
