import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import SidebarCollapsible from './SidebarCollapsible';
import performStandardTests from '../../../../test/utils/performStandardTests';
import hasDefaultClassNames from '../../../../test/utils/hasDefaultClassNames';
import Sidebar from './Sidebar';


describe('SidebarCollapsible component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const defaultProps = { text: 'foo', children: <Sidebar.Item text="foo" /> };

  // performs the standard tests
  performStandardTests(SidebarCollapsible, defaultProps);
  // performs a test on default class names
  hasDefaultClassNames(SidebarCollapsible, defaultProps, ['bi-sidebar-nav-item', 'sidebar-collapsible']);

  it('should allow the define icon and text', () => {
    const { container } = render(
      <SidebarCollapsible text="Foo" icon="rocket">
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
      </SidebarCollapsible>,
    );

    const collapsibleEl = container.querySelector('.sidebar-collapsible');

    expect(collapsibleEl.querySelector('.bi-sidebar-item-content').innerHTML).to.equal('Foo');
    expect(collapsibleEl.querySelector('.fa-rocket')).exist;
  });

  it('should render the provided number of Sidebar.Item', () => {
    const { container } = render(
      <SidebarCollapsible>
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
      </SidebarCollapsible>,
    );

    const collapsibleEl = container.querySelectorAll('.sidebar-collapsible .bi-sidebar-nav-item').length;

    expect(collapsibleEl).to.equal(3);
  });

  it('should open/close when clicking on the collapsible item', () => {
    const { container } = render(
      <SidebarCollapsible>
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
        <Sidebar.Item text="foo" />
      </SidebarCollapsible>,
    );

    const collapsibleEl = container.querySelector('.sidebar-collapsible');

    expect(collapsibleEl.classList.contains('sidebar-collapsible-open')).to.be.false;

    fireEvent.click(collapsibleEl.querySelector('a'));

    expect(collapsibleEl.classList.contains('sidebar-collapsible-open')).to.be.true;
  });
});
