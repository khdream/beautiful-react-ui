import React from 'react';
import { cleanup, render } from '@testing-library/react';
import SidebarGroup from './SidebarGroup';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import Sidebar from './Sidebar';


describe('SidebarGroup component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { text: 'foo' };

  // performs the standard tests
  performStandardTests(SidebarGroup, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(SidebarGroup, defaultProps, ['bi-sidebar-nav-item', 'sidebar-group']);

  it('should allow the define icon and text', () => {
    const { container } = render(
      <SidebarGroup text="Foo" icon="rocket">
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
      </SidebarGroup>,
    );

    const collapsibleEl = container.querySelector('.sidebar-group');

    expect(collapsibleEl.querySelector('.bi-sidebar-item-content').innerHTML).to.equal('Foo');
    expect(collapsibleEl.querySelector('.fa-rocket')).exist;
  });

  it('should render the provided number of Sidebar.Item', () => {
    const { container } = render(
      <SidebarGroup>
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
      </SidebarGroup>,
    );

    const collapsibleEl = container.querySelectorAll('.sidebar-group .bi-sidebar-nav-item').length;

    expect(collapsibleEl).to.equal(3);
  });
});
