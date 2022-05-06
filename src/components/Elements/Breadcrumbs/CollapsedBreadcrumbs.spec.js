import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CollapsedBreadcrumbs from './CollapsedBreadcrumbs';

describe('CollapsedBreadcrumbs component', () => {
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
    const { container } = render(<CollapsedBreadcrumbs items={pages} maxDisplayedItems={2} />);

    should.exist(container);
  });

  it('should render a menu button', () => {
    const pages = [
      { path: '/', label: 'home' },
      { path: '/section1', label: 'Section1' },
      { path: '/section2', label: 'Section2' },
      { path: '/section3', label: 'Section3' },
    ];
    const { container } = render(<CollapsedBreadcrumbs items={pages} maxDisplayedItems={2} />);
    const buttonMenu = container.querySelector('.bi-breadcrumbs-menu-button');

    expect(buttonMenu).to.exist;
  });
});
