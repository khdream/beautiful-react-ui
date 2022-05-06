import React from 'react';
import { cleanup, render } from '@testing-library/react';
import BreadcrumbMenu from './BreadcrumbMenu';

describe('BreadcrumbMenu component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('it should render without explode', () => {
    const pages = [
      { path: '/', label: 'home' },
      { path: '/section1', label: 'Section1' },
      { path: '/section2', label: 'Section2' },
      { path: '/section3', label: 'Section3' },
    ];
    const { container } = render(<BreadcrumbMenu items={pages} />);

    should.exist(container);
  });
});
