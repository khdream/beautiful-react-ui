import React from 'react';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import TextArea from '.';

describe('TextArea component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });


  it('it should render without explode', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-textarea')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} />);
    // using div just to test if it has default classes
    const textareaEl = container.querySelector('div');

    expect(textareaEl.classList.contains('bi')).to.be.true;
    expect(textareaEl.classList.contains('bi-textarea')).to.be.true;
    expect(textareaEl.classList.contains('textarea-default')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} id="foo" />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} className="foo" />);
    const textareaEl = container.querySelector('.bi.bi-textarea');

    expect(textareaEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} style={{ margin: '10px' }} />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should pass the value prop down to the actual textarea tag', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.value).to.equal('foo');
  });

  it('should perform the onChange callback when the textarea value changes', () => {
    const onChange = sinon.spy();
    const { container } = render(<TextArea value="foo" onChange={onChange} />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    fireEvent.change(textareaEl, { target: { value: 'bar' } });

    wait(() => expect(onChange.called).to.equal(true));
  });

  it('should allow to define the textarea placeholder', () => {
    const placeholder = 'bar';
    const { container } = render(<TextArea value="foo" onChange={noop} placeholder="bar" />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.placeholder).to.equal(placeholder);
  });

  it('should have a default placeholder', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.placeholder).to.equal(TextArea.type.defaultProps.placeholder);
  });

  it('should allow to set the textarea disabled', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} disabled />);
    const textareaEl = container.querySelector('.bi.bi-textarea textarea');

    expect(textareaEl.disabled).to.equal(true);
  });

  it('should possibly show a helping text', () => {
    const helpText = 'Help text';
    const { getByText } = render(<TextArea value="foo" onChange={noop} helpText={helpText} />);
    const helpTextComponent = getByText(helpText);

    expect(helpTextComponent).to.exist;
    expect(helpTextComponent.classList.contains('bi-helptext')).to.equal(true);
  });

  it('should allow to define the textarea color', () => {
    const { container, rerender } = render(<TextArea value="foo" onChange={noop} color="primary" />);
    const textareaEl = container.querySelector('.bi.bi-textarea');

    expect(textareaEl.classList.contains('textarea-primary')).to.be.true;
    expect(textareaEl.classList.contains('textarea-default')).to.not.be.true;

    rerender(<TextArea value="foo" onChange={noop} color="warning" />);
    expect(textareaEl.classList.contains('textarea-warning')).to.be.true;

    rerender(<TextArea value="foo" onChange={noop} />);
    expect(textareaEl.classList.contains('textarea-default')).to.be.true;
    expect(textareaEl.classList.contains('textarea-primary')).to.not.be.true;
    expect(textareaEl.classList.contains('textarea-warning')).to.not.be.true;
  });

  it('should allow to define the textarea size', () => {
    const { container, rerender } = render(<TextArea value="foo" onChange={noop} size="small" />);
    const textareaEl = container.querySelector('.bi.bi-textarea');

    expect(textareaEl.classList.contains('textarea-sm')).to.be.true;

    rerender(<TextArea value="foo" onChange={noop} size="large" />);
    expect(textareaEl.classList.contains('textarea-sm')).to.not.be.true;
    expect(textareaEl.classList.contains('textarea-lg')).to.be.true;

    rerender(<TextArea value="foo" onChange={noop} />);
    expect(textareaEl.classList.contains('textarea-sm')).to.not.be.true;
    expect(textareaEl.classList.contains('textarea-lg')).to.not.be.true;
  });

  it('should possible make the textarea resizable', () => {
    const { container } = render(<TextArea value="foo" onChange={noop} resizable />);
    const textareaEl = container.querySelector('.bi.bi-textarea');

    expect(textareaEl.classList.contains('resizable')).to.be.true;
  });
});
