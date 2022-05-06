import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CardFooter from './CardFooter';

describe('CardFooter component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<CardFooter>Foo</CardFooter>);

    expect(container).to.exist;
    expect(container.querySelector('.card-footer')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<CardFooter> Foo </CardFooter>);
    const footerCardComp = container.querySelector('footer');

    expect(footerCardComp.classList.contains('card-footer')).to.be.true;
  });

  it('should accept custom classes', () => {
    const { container } = render(<CardFooter className="foo"> Foo </CardFooter>);
    const footerCardComp = container.querySelector('.card-footer');

    expect(footerCardComp.classList.contains('foo')).to.be.true;
  });

  it('should accept a \'textAlign\' prop', () => {
    const { container } = render(<CardFooter textAlign="center">foo</CardFooter>);
    const footerCardComp = container.querySelector('.card-footer');

    expect(footerCardComp.classList.contains('text-align-center')).to.be.true;
  });
});
