import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Label from '.';

describe('Label component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);

    should.exist(container);
    expect(container.querySelector('label')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-label', 'bi-label-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" id="foo" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" className="foo" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" style={{ margin: '10px' }} />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('must have an htmlFor prop', () => {
    const { container } = render(<Label htmlFor="foo" text="bar" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.getAttribute('for')).to.equal('foo');
  });

  it('must have a text prop', () => {
    const { getByText } = render(<Label htmlFor="foo" text="bar" />);
    const possibleLabel = getByText(/bar/);

    expect(possibleLabel.tagName).to.equal('LABEL');
    expect(possibleLabel.textContent).to.equal('bar');
  });

  it('can render and wrap an input tag', () => {
    const { container } = render(<Label htmlFor="foo" text="bar"><input type="hidden" id="foo" /></Label>);
    const el = container.querySelector('.bi.bi-label');

    expect(el.querySelector('input')).to.exist;
  });

  it('should allow to define the label color', () => {
    const { container, rerender } = render(<Label htmlFor="foo" text="bar" color="primary" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.getAttribute('class').split(' ')).to.include.members(['bi-label-primary']);
    expect(el.getAttribute('class').split(' ')).to.not.include.members(['bi-label-default']);

    rerender(<Label htmlFor="foo" text="bar" color="warning" />);
    expect(el.getAttribute('class').split(' ')).to.include.members(['bi-label-warning']);

    rerender(<Label htmlFor="foo" text="bar" />);
    expect(el.getAttribute('class').split(' ')).to.include.members(['bi-label-default']);
    expect(el.getAttribute('class').split(' ')).to.not.include.members(['bi-label-primary', 'bi-label-warning']);
  });

  it('can be required', () => {
    const { container, getByText } = render(<Label htmlFor="foo" text="bar" required />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.querySelector('span')).to.exist;
    expect(getByText(/\*/).tagName).to.equal('SPAN');
  });

  it('should allow to define a \'span\' tagName', () => {
    const { container } = render(<Label text="bar" tagName="span" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.tagName).to.equal('SPAN');
  });

  it('should allow to define a \'label\' tagName', () => {
    const { container } = render(<Label text="bar" tagName="label" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.tagName).to.equal('LABEL');
  });

  it('should fallback to a label if the wrong \'tagName\' has been provided', () => {
    const { container } = render(<Label text="bar" tagName="p" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.tagName).to.equal('LABEL');
  });
});
