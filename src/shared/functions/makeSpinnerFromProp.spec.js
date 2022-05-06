import React from 'react';
import makeSpinnerFromProp from './makeSpinnerFromProp';
import Spinner from '../../components/Elements/Spinner';

describe('makeSpinnerFromProp function utility', () => {
  it('should accepts a boolean and return the instance of an Pill component', () => {
    const result = makeSpinnerFromProp(true);

    expect(result.type).to.equal(Spinner);
  });

  it('should accepts the instance of a Spinner component and overrides its props', () => {
    const result = makeSpinnerFromProp(<Spinner />, { color: 'primary' });

    expect(result.type).to.equal(Spinner);
    expect(result.props.color).to.equal('primary');
  });
});
