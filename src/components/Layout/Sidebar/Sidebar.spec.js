import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Sidebar from './Sidebar';
import noop from '../../../../test/utils/noop';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import checkColorProp from '../../../../test/utils/checkColorProp';

describe('Sidebar component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { isOpen: true, onToggle: noop, children: <Sidebar.Item text="foo" to="/foo" /> };

  // performs the standard tests
  performStandardTests(Sidebar, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(Sidebar, defaultProps, ['bi-sidebar', 'sidebar-primary', 'sidebar-shrinkable']);

  // performs a test on a color prop named 'accent'
  checkColorProp(Sidebar, defaultProps, {
    colorProp: 'accent',
    defaultColor: 'primary',
    defaultColorClass: 'sidebar-primary',
    checkColor: 'info',
    checkColorClass: 'sidebar-info',
  });

  it('should set the title to \'Sidebar\' if no logo and no title are provided', () => {
    const { container } = render(
      <Sidebar isOpen onToggle={noop}>
        <Sidebar.Item text="foo" />
      </Sidebar>,
    );

    const headerTitle = container.querySelector('aside .bi-sidbr-head-ctnt h1');

    expect(headerTitle.innerHTML).to.equal('Sidebar');
  });

  it('should allow to define a custom header logo', () => {
    const LogoMock = () => (<img src="" id="foo" alt="foo" />);

    const { container } = render(
      <Sidebar isOpen onToggle={noop} headerLogo={<LogoMock />}>
        <Sidebar.Item text="foo" />
      </Sidebar>,
    );

    const headerEl = container.querySelector('aside .bi-sidbr-head-ctnt');

    expect(headerEl.querySelector('#foo')).to.exist;
  });
});
