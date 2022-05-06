import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import SelectTrigger from './SelectTrigger';


const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];

describe('SelectTrigger component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<SelectTrigger options={optionsMock} />);

    expect(container).to.exist;
    expect(container.querySelector('.bi-select-element')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<SelectTrigger options={optionsMock} />);
    const selectTriggerComp = container.querySelector('div').querySelector('div');

    expect(selectTriggerComp.classList.contains('bi-select-element')).to.be.true;
  });

  it('should perform the onClear callback when clicking on the close button', () => {
    const onClear = sinon.spy();
    const { container } = render(
      <SelectTrigger options={optionsMock} onClear={onClear} clearable value={optionsMock[1].value} />,
    );
    const selectTriggerComp = container.querySelector('.bi-select-element');
    const closeIcon = selectTriggerComp.querySelector('.sel-clear-x');

    expect(closeIcon).to.exist;

    fireEvent.click(closeIcon);

    expect(onClear.called).to.be.true;
  });

  it('should possibly show a helping text', () => {
    render(<SelectTrigger options={optionsMock} helpText="foo" />);
    const helpTextComp = document.querySelector('.bi.bi-helptext');

    expect(helpTextComp).to.exist;
  });
});
