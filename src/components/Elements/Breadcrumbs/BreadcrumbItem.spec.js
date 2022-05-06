import React from 'react';
import { cleanup, render } from '@testing-library/react';
import BreadcrumbItem from './BreadcrumbItem';

describe('BreadcrumbItem component', () => {
  afterEach(cleanup);

  it('it should render without explode', () => {
    const { container } = render(<BreadcrumbItem path="/" label="foo" icon="rocket" />);

    should.exist(container);
  });

  it('should render an \'anchor\' tag if path is defined', () => {
    const { container } = render(<BreadcrumbItem path="/" label="Foo" />);
    const anchor = container.querySelector('a');

    expect(anchor).to.exist;
    expect(anchor.href).to.equal('/');
  });

  it('should not render an \'anchor\' tag if path is not defined', () => {
    const { container } = render(<BreadcrumbItem label="Foo" />);
    const anchor = container.querySelector('a');

    expect(anchor).not.to.exist;
  });

  it('should render an icon if defined', () => {
    const { container } = render(<BreadcrumbItem icon="rocket" />);
    const icon = container.querySelector('.bi.bi-icon');

    expect(icon).to.exist;
  });
});
