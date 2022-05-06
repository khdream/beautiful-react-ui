import React from 'react';
import makePillFromProp from './makePillFromProp';
import Pill from '../../components/Elements/Pill';

describe('makePillFromProp function utility', () => {
  it('should accepts a string and return the instance of an Pill component', () => {
    const result = makePillFromProp('Hello');

    expect(result.type).to.equal(Pill);
  });

  it('should accepts the instance of a PIll component and overrides its props', () => {
    const result = makePillFromProp(<Pill>Hello</Pill>, { color: 'primary' });

    expect(result.type).to.equal(Pill);
    expect(result.props.color).to.equal('primary');
  });
});
