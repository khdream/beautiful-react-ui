import React from 'react';
import getFirstChild from './getFirstChild';

describe('getFirstChild function utility', () => {
  it('should return null if performed without any parameter', () => {
    expect(getFirstChild()).to.be.null;
  });

  it('should return null if performed with empty React children', () => {
    const Component = <div />;

    expect(getFirstChild(Component.props.children)).to.be.null;
  });

  it('should return the first child', () => {
    const Component = (
      <ul>
        <li>Hello</li>
        <li>World</li>
      </ul>
    );

    expect(getFirstChild(Component.props.children).props.children).to.equal('Hello');
  });
});
