import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';

describe('SidebarItem component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { text: 'foo' };

  performStandardTests(SidebarItem, defaultProps);
  hasDefaultClassNames(SidebarItem, defaultProps, ['bi-sidebar-nav-item']);

  it('should show a Tooltip when the sidebar closes', () => {
    const { rerender, container } = render(
      <Sidebar isOpen>
        <SidebarItem text="foo" icon="rocket" />
      </Sidebar>,
    );

    expect(document.querySelector('#bi-floats .bi.bi-tooltip')).to.not.exist;

    rerender(
      <Sidebar isOpen={false} orientation="right">
        <SidebarItem text="foo" icon="rocket" />
      </Sidebar>,
    );

    const sidebarItemEl = container.querySelector('.bi-sidebar-item-shrunk');

    fireEvent.mouseOver(sidebarItemEl);

    expect(document.querySelector('#bi-floats .bi.bi-tooltip')).to.exist;
  });
});
