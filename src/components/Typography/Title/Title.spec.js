import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Title>Foo</Title>);

    expect(container).to.exist;
    expect(container.querySelector('.bi-title')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Title>Foo</Title>);
    const titleEl = container.querySelector('h1');

    expect(titleEl.classList.contains('bi-title')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Title id="foo">Foo</Title>);
    const titleEl = container.querySelector('h1');

    expect(titleEl.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(<Title className="foo">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Title style={{ margin: '10px' }}>Foo</Title>);
    const titleEl = container.querySelector('h1');

    expect(titleEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to change the title color by setting a \'color\' prop', () => {
    const { container, rerender } = render(<Title color="primary">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('bi-title-primary')).to.be.true;

    rerender(<Title>Foo</Title>);

    expect(titleEl.classList.contains('bi-title-primary')).to.be.false;
  });

  it('should allow to align the text by setting a \'textAlign\' prop', () => {
    const { container } = render(<Title textAlign="center">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('bi-title-center')).to.be.true;
  });

  it('should allow to define the html tag to be used by setting a \'tagName\' prop', () => {
    const { container } = render(<Title tagName="h4">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.tagName).to.equal('H4');
  });

  it('should fallback to the h1 html tag when an invalid \'tagName\' is provided', () => {
    const { container } = render(<Title tagName="h7">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.tagName).to.equal('H1');
  });


  it('should allow to define the title size by setting a \'size\' prop', () => {
    const { container } = render(<Title size="xl">Foo</Title>);
    const titleEl = container.querySelector('.bi-title');

    expect(titleEl.classList.contains('title-xl')).to.be.true;
  });
});
