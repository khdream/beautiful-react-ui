import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<List />);

    should.exist(container);
    expect(container.querySelector('ul')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<List />);
    const list = container.querySelector('ul');

    expect(list.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-list', 'bi-list-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<List id="foo" />);
    const list = container.querySelector('.bi.bi-list');

    expect(list.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<List className="foo" />);
    const list = container.querySelector('.bi.bi-list');

    expect(list.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<List style={{ margin: '10px' }} />);
    const list = container.querySelector('.bi.bi-list');

    expect(list.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('can possibly be condensed', () => {
    const { container } = render(<List condensed />);
    const list = container.querySelector('.bi.bi-list');

    expect(list.getAttribute('class').split(' ')).to.include.members(['bi-list-condensed']);
  });

  it('should render its own children', () => {
    const { container } = render(
      <List>
        <List.Item>Foo</List.Item>
        <List.Item>Bar</List.Item>
      </List>,
    );
    const listItems = container.querySelectorAll('.bi.bi-list-item');

    expect(listItems.length).to.equal(2);
  });
});
