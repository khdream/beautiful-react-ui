import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Tab from './Tab';
import TabContent from './TabContent';

describe('TabContent component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <TabContent>
        <p>Et et consectetur ipsum labore excepteur est proident excepteur ad...</p>
      </TabContent>,
    );

    const tabContent = container.querySelector('.tab-content');
    expect(tabContent).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <TabContent>
        <p>Et et consectetur ipsum labore excepteur est proident excepteur ad...</p>
      </TabContent>,
    );

    const tabContent = container.querySelector('div');
    expect(tabContent.getAttribute('class').split(' ')).to.include.members(['tab-content']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(
      <TabContent id="content">
        <p>Et et consectetur ipsum labore excepteur est proident excepteur ad...</p>
      </TabContent>,
    );

    const tabContent = container.querySelector('.tab-content');
    expect(tabContent.id).to.equal('content');
  });

  it('should allow to add custom classes', () => {
    const { container } = render(
      <TabContent className="newClass">
        <p>Et et consectetur ipsum labore excepteur est proident excepteur ad...</p>
      </TabContent>,
    );

    const tabContent = container.querySelector('.tab-content');
    expect(tabContent.getAttribute('class').split(' ')).to.include.members(['newClass']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(
      <TabContent style={{ margin: '10px' }}>
        <p>Et et consectetur ipsum labore excepteur est proident excepteur ad...</p>
      </TabContent>,
    );

    const tabContent = container.querySelector('.tab-content');
    expect(tabContent.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should show the active content', () => {
    const { container } = render(
      <Tab active={2}>
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

    const tabContent = container.querySelector('.tab-content.tab-content-show');
    expect(tabContent).to.exist;
  });
});
