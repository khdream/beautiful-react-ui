import React from 'react';
import { render, cleanup } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Tab from './Tab';

describe('Tab component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');

    should.exist(container);
    expect(tab).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('div');

    expect(tab.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-tab']);
  });

  it('should accept an id prop', () => {
    const { container } = render(
      <Tab active={1} onChange={noop} id="firstTab">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');

    expect(tab.id).to.equal('firstTab');
  });

  it('should allow to add custom classes', () => {
    const { container } = render(
      <Tab className="newClass">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');

    expect(tab.getAttribute('class').split(' ')).to.include.members(['newClass']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(
      <Tab active={1} onChange={noop} style={{ margin: '10px' }}>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');

    expect(tab.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to change the link color', () => {
    const { container, rerender } = render(
      <Tab active={1} onChange={noop} color="secondary">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab');

    expect(tab.getAttribute('class').split(' ')).to.include.members(['tab-color-secondary']);
    expect(tab.getAttribute('class').split(' ')).to.not.include.members(['tab-color-default']);

    rerender(
      <Tab active={1} onChange={noop} color="danger">
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    expect(tab.getAttribute('class').split(' ')).to.include.members(['tab-color-danger']);
    expect(tab.getAttribute('class').split(' ')).to.not.include.members(['tab-color-secondary']);

    rerender(
      <Tab active={1} onChange={noop}>
        <Tab.Content>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    expect(tab.getAttribute('class').split(' ')).to.include.members(['tab-color-default']);
    expect(tab.getAttribute('class').split(' ')).to.not.include.members(['tab-color-danger']);
  });

  it('should render the correct number of tab label', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const labelsNumber = container.querySelector('.bi.bi-tab').querySelectorAll('a').length;

    expect(labelsNumber).to.equal(3);
  });

  it('should render the correct number of tab content', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const contentsNumber = container.querySelector('.bi.bi-tab').querySelectorAll('.tab-content').length;

    expect(contentsNumber).to.equal(3);
  });

  it('should accept icon prop', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content icon="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const icon = container.querySelector('.bi.bi-tab').querySelector('svg');

    expect(icon.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-icon']);
  });

  it('should disable the label if the corresponding prop is set as disabled', () => {
    const { container } = render(
      <Tab active={1} onChange={noop}>
        <Tab.Content disabled>
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tab = container.querySelector('.bi.bi-tab').querySelector('.tab-disabled');

    expect(tab).to.exist;
  });

  it('should show the active content', () => {
    const { container } = render(
      <Tab onChange={noop} active={2}>
        <Tab.Content title="home">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="contacy">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
        <Tab.Content title="profile">
          <p>Et et consectetur ipsum labore excepteur est proident excepteur...</p>
        </Tab.Content>
      </Tab>,
    );

    const tabContent = container.querySelector('.bi.bi-tab').querySelector('.tab-content-show');

    expect(tabContent).to.exist;
  });
});
