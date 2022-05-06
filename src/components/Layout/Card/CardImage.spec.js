import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CardImage from './CardImage';

describe('CardImage component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />);

    expect(container).to.exist;
    expect(container.querySelector('.card-img')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<CardImage src="https://placeimg.com/460/250/nature" alt="Alt text" />);
    const footerCardComp = container.querySelector('div');

    expect(footerCardComp.classList.contains('card-img')).to.be.true;
  });
});
