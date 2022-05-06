import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DisplayField from '.';

describe('DisplayField component', () => {
  afterEach(cleanup);

  it('it should render without explode', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-df')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" />);
    // querying the first div for test purposes only
    const el = container.querySelector('div');

    expect(el.classList.contains('bi')).to.be.true;
    expect(el.classList.contains('bi-df')).to.be.true;
    expect(el.classList.contains('bi-df-default')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" id="foo-bar" />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.id).to.equal('foo-bar');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" className="foo-bar" />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.classList.contains('foo-bar')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" style={{ margin: '10px' }} />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should show a label', () => {
    const { getByText } = render(<DisplayField label="Foo" value="bar" />);
    const labelTag = getByText('Foo');

    expect(labelTag).to.exist;
    expect(labelTag.classList.contains('bi-label')).to.be.true;
  });

  it('should allow to define the label color', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" labelColor="primary" />);
    const el = container.querySelector('.bi.bi-label');

    expect(el.classList.contains('bi-label-primary')).to.be.true;
    expect(el.classList.contains('bi-label-default')).to.not.be.true;
  });

  it('should allow to define the value color', () => {
    const { container, rerender } = render(<DisplayField label="Foo" value="bar" valueColor="primary" />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.classList.contains('bi-df-primary')).to.be.true;
    expect(el.classList.contains('bi-df-default')).to.not.be.true;

    rerender(<DisplayField label="Foo" value="bar" valueColor="warning" />);
    expect(el.classList.contains('bi-df-warning')).to.be.true;

    rerender(<DisplayField label="Foo" value="bar" />);
    expect(el.classList.contains('bi-df-default')).to.be.true;
    expect(el.classList.contains('bi-df-primary')).to.not.be.true;
    expect(el.classList.contains('bi-df-warning')).to.not.be.true;
  });

  it('should allow to define the border style', () => {
    const { container, rerender } = render(<DisplayField label="Foo" value="bar" borderStyle="dashed" />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.classList.contains('bi-df-border-dashed')).to.be.true;
    expect(el.classList.contains('bi-df-border-solid')).to.not.be.true;

    rerender(<DisplayField label="Foo" value="bar" borderStyle="dotted" />);
    expect(el.classList.contains('bi-df-border-dotted')).to.be.true;

    rerender(<DisplayField label="Foo" value="bar" />);
    expect(el.classList.contains('bi-df-border-solid')).to.be.true;
    expect(el.classList.contains('bi-df-border-dotted')).to.not.be.true;
    expect(el.classList.contains('bi-df-border-dashed')).to.not.be.true;
  });

  it('should allow to set the value font-weight to bold', () => {
    const { container } = render(<DisplayField label="Foo" value="bar" boldValue />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.classList.contains('bi-df-bold-value')).to.be.true;
  });

  it('should allow to set the label font-weight to bold', () => {
    const { container, rerender } = render(<DisplayField label="Foo" value="bar" boldLabel />);
    const el = container.querySelector('.bi.bi-df');

    expect(el.classList.contains('bi-df-bold-label')).to.be.true;

    rerender(<DisplayField label="Foo" value="bar" boldLabel={false} />);

    expect(el.classList.contains('bi-df-bold-label')).to.be.false;
  });
});
