import React from 'react';
import { cleanup, render } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import SelectDropDown from './SelectDropDown';

const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];

const optionsGroupMock = [
  {
    name: 'foo',
    options: [
      { label: 'foo', value: 'foo' },
      { label: 'bar', value: 'bar' },
    ],
  },
];

describe('SelectDropDown component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <SelectDropDown
        options={optionsMock}
        filtrable
        filterInputPlaceholder="foo"
        filterNoResultLabel="bar"
        onChange={noop}
      />,
    );

    expect(container).to.exist;
    expect(container.querySelector('.bi-select-options-dropdown')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <SelectDropDown
        options={optionsMock}
        filtrable
        filterInputPlaceholder="foo"
        filterNoResultLabel="bar"
        onChange={noop}
      />,
    );

    const selectDropDownComp = container.querySelector('div');

    expect(selectDropDownComp.classList.contains('bi-select-options-dropdown')).to.be.true;
  });

  it('should display a grouped dropdown list', () => {
    const { container } = render(
      <SelectDropDown
        options={optionsGroupMock}
        hasOptionGroups
        filtrable
        filterInputPlaceholder="foo"
        filterNoResultLabel="bar"
        onChange={noop}
        value="foo"
      />,
    );

    const selectDropDownComp = container.querySelector('div');

    expect(selectDropDownComp.classList.contains('grouped-opts')).to.be.true;
  });

  it('should not display a grouped dropdown if hasOptionGroup is undefined ', () => {
    const { container } = render(
      <SelectDropDown
        options={optionsMock}
        filtrable
        filterInputPlaceholder="foo"
        filterNoResultLabel="bar"
        onChange={noop}
      />,
    );

    const selectDropDownComp = container.querySelector('div');

    expect(selectDropDownComp.classList.contains('grouped-opts')).to.be.false;
  });
});
