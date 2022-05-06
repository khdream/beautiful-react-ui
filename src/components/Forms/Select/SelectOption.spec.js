import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import SelectOption from './SelectOption';

const optionMock = { label: 'Foo', value: 'foo' };

describe('SelectOption component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<SelectOption option={optionMock} onClick={noop} />);

    expect(container).to.exist;
    expect(container.querySelector('.bi-select-opt')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<SelectOption option={optionMock} onClick={noop} />);
    const selectOptionComp = container.querySelector('div');

    expect(selectOptionComp.classList.contains('bi-select-opt')).to.be.true;
  });

  it('should perform the onClick callback when an option is selected and yet available', () => {
    const onClick = sinon.spy();
    const { container } = render(<SelectOption option={optionMock} onClick={onClick} />);
    const selectOptionComp = container.querySelector('.bi-select-opt');
    fireEvent.click(selectOptionComp);
    expect(onClick.called).to.equal(true);
  });

  it('should not perform the onClick callback if an option is disabled', () => {
    const disabledOption = { label: 'Baz', value: 'baz', disabled: true };
    const onClick = sinon.spy();
    const { container } = render(<SelectOption option={disabledOption} onClick={onClick} />);
    const selectOptionComp = container.querySelector('.bi-select-opt');
    fireEvent.click(selectOptionComp);
    expect(onClick.called).to.equal(false);
  });

  it('should show the option as selected if its \'selected\' property is set to true', () => {
    const { container } = render(<SelectOption option={optionMock} onClick={noop} selected />);
    const selectOptionComp = container.querySelector('.bi-select-opt');

    expect(selectOptionComp.classList.contains('selected'));
  });
});
