import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Image from '.';

describe('Image component', () => {
  const src = 'foo';
  const alt = 'bar';

  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Image src={src} alt={alt} />);

    should.exist(container);
    expect(container.querySelector('img')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Image src={src} alt={alt} />);
    const image = container.querySelector('img');

    expect(image.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-image']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Image src={src} alt={alt} id="foo" />);
    const image = container.querySelector('img');

    expect(image.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Image src={src} alt={alt} className="foo" />);
    const image = container.querySelector('img');

    expect(image.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Image src={src} alt={alt} style={{ margin: '10px' }} />);
    const image = container.querySelector('img');

    expect(image.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should possibly be rendered as a thumbnail', () => {
    const { container } = render(<Image src={src} alt={alt} thumb />);
    const image = container.querySelector('img');

    expect(image.getAttribute('class').split(' ')).to.include.members(['bi-img-thumb']);
  });
});
