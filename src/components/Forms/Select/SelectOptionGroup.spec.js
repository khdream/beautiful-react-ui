import React from 'react';
import { cleanup, render } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import SelectOptionGroup from './SelectOptionGroup';

const optionsGroupMock = {
  name: 'foo',
  options: [
    { label: 'foo', value: 'foo' },
    { label: 'bar', value: 'bar' },
  ],
};

describe('SelectOptionGroup component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<SelectOptionGroup group={optionsGroupMock} value="foo" onClick={noop} />);

    expect(container).to.exist;
    expect(container.querySelector('.select-group')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<SelectOptionGroup group={optionsGroupMock} value="foo" onClick={noop} />);
    const selectOptionGroupComp = container.querySelector('div');

    expect(selectOptionGroupComp.classList.contains('select-group')).to.be.true;
  });
});
