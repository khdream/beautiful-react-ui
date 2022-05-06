import React from 'react';
import getLastChild from './getLastChild';

describe('getLastChild function utility', () => {
  it('should return null if performed without any parameter', () => {
    expect(getLastChild()).to.be.null;
  });

  it('should return null if performed with empty React children', () => {
    const Component = <div />;

    expect(getLastChild(Component.props.children)).to.be.null;
  });

  it('should return the last child', () => {
    const Component = (
      <ul>
        <li>Hello</li>
        <li>World</li>
      </ul>
    );

    expect(getLastChild(Component.props.children).props.children).to.equal('World');
  });
});
