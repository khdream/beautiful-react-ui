import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);

    expect(container).to.exist;
    expect(container.querySelector('p')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Paragraph>Foo</Paragraph>);
    const pEl = container.querySelector('p');

    expect(pEl.classList.contains('bi')).to.be.true;
    expect(pEl.classList.contains('bi-p')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Paragraph id="foo">Foo</Paragraph>);
    const pEl = container.querySelector('p');

    expect(pEl.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(<Paragraph className="foo">Foo</Paragraph>);
    const pEl = container.querySelector('.bi-p');

    expect(pEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Paragraph style={{ margin: '10px' }}>Foo</Paragraph>);
    const pEl = container.querySelector('p');

    expect(pEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to change the paragraph color by setting a \'color\' prop', () => {
    const { container, rerender } = render(<Paragraph color="primary">Foo</Paragraph>);
    const pEl = container.querySelector('.bi-p');

    expect(pEl.classList.contains('bi-p-primary')).to.be.true;

    rerender(<Paragraph>Foo</Paragraph>);

    expect(pEl.classList.contains('bi-p-primary')).to.be.false;
  });

  it('should allow to align the text by setting a \'textAlign\' prop', () => {
    const { container } = render(<Paragraph textAlign="justify">Foo</Paragraph>);
    const pEl = container.querySelector('.bi-p');

    expect(pEl.classList.contains('bi-p-justify')).to.be.true;
  });


  it('should allow to change the paragraph font by setting a \'fontFamily\' prop', () => {
    const { container, rerender } = render(<Paragraph fontFamily="mono">Foo</Paragraph>);
    const pEl = container.querySelector('.bi-p');

    expect(pEl.classList.contains('bi-ff-mono')).to.be.true;

    rerender(<Paragraph>Foo</Paragraph>);

    expect(pEl.classList.contains('bi-ff-sans')).to.be.true;
    expect(pEl.classList.contains('bi-ff-mono')).to.be.false;
  });
});
