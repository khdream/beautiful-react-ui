import React from 'react';
import makeIconFromProp from './makeIconFromProp';
import Icon from '../../components/Elements/Icon';

describe('makeIconFromProp function utility', () => {
  it('should accepts an icon name and return the instance of an Icon component', () => {
    const result = makeIconFromProp('heart');

    expect(result.type).to.equal(Icon);
  });

  it('should accepts an array of icon names and return the instance of an Icon component', () => {
    const result = makeIconFromProp(<Icon name={['fab', 'react']} />);

    expect(result.type).to.equal(Icon);
  });

  it('should accepts the instance of an Icon component and overrides its props', () => {
    const result = makeIconFromProp(<Icon name="heart" />, { color: 'primary' });

    expect(result.type).to.equal(Icon);
    expect(result.props.color).to.equal('primary');
  });
});
