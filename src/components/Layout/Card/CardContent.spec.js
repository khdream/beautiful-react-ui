import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CardContent from './CardContent';

describe('CardContent component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<CardContent>Content</CardContent>);

    expect(container).to.exist;
    expect(container.querySelector('.card-content')).to.exist;
  });

  it('should accept custom classes', () => {
    const { container } = render(<CardContent className="foo"> Foo </CardContent>);
    const contentCardComp = container.querySelector('.card-content');

    expect(contentCardComp.classList.contains('foo')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardContent textAlign="center">foo</CardContent>);
    const contentCardComp = container.querySelector('.card-content');

    expect(contentCardComp.classList.contains('text-align-center')).to.be.true;
  });
});
