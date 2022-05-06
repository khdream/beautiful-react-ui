import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<ListItem />);

    should.exist(container);
    expect(container.querySelector('li')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<ListItem />);
    const item = container.querySelector('li');

    expect(item.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-list-item', 'bi-list-item-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<ListItem id="foo" />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<ListItem className="foo" />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<ListItem style={{ margin: '10px' }} />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to define a custom icon', () => {
    const { container } = render(<ListItem icon="rocket" />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.querySelector('.bi.bi-icon.bi-list-item-icon')).to.exist;
  });

  it('should possibly allow to add a checkbox', () => {
    const { container } = render(<ListItem checkbox value />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.querySelector('.bi-item-checkbox')).to.exist;
    expect(listItem.getAttribute('class').split(' ')).to.include.members(['bi-list-checkable']);
    expect(listItem.getAttribute('class').split(' ')).to.include.members(['bi-list-item-checked']);
  });

  it('should allow to drag items', () => {
    const { container } = render(<ListItem draggable />);
    const listItem = container.querySelector('.bi.bi-list-item');

    expect(listItem.getAttribute('class').split(' ')).to.include.members(['bi-list-item-draggable']);
  });
});
