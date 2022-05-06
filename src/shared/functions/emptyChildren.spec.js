import React from 'react';
import emptyChildren from './emptyChildren';

describe('emptyChildren function utility', () => {
  it('should return true if performed without any parameter', () => {
    expect(emptyChildren()).to.be.true;
  });

  it('should return true if performed with empty React children', () => {
    const Component = <div />;

    expect(emptyChildren(Component.props.children)).to.be.true;
  });

  it('should return false if performed with not empty React children', () => {
    const Component = <p>Hello</p>;

    expect(emptyChildren(Component.props.children)).to.be.false;
  });
});
