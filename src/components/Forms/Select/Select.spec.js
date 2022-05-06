import React from 'react';
import { render, cleanup, fireEvent, waitForDomChange } from '@testing-library/react';
import Select from '.';

const optionsMock = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz', disabled: true },
];

describe('Select component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Select options={optionsMock} />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-select')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Select options={optionsMock} />);

    const selectComp = container.querySelector('div');
    expect(selectComp.classList.contains('bi')).to.be.true;
    expect(selectComp.classList.contains('bi-select')).to.be.true;
  });

  it('should accept an id prop', () => {
    const { container } = render(<Select options={optionsMock} id="foo" />);
    const selectComp = container.querySelector('.bi.bi-select');

    expect(selectComp.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Select options={optionsMock} className="foo" />);
    const selectComp = container.querySelector('.bi.bi-select');

    expect(selectComp.classList.contains('foo'));
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Select options={optionsMock} style={{ margin: '10px' }} />);
    const selectComp = container.querySelector('.bi.bi-select');

    expect(selectComp.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render the selected option\'s label', () => {
    const { container } = render(<Select options={optionsMock} value={optionsMock[1].value} />);
    const selectComp = container.querySelector('.bi.bi-select .bi-select-element > span');

    expect(selectComp.textContent).to.contain(optionsMock[1].label);
  });

  it('should show a placeholder if the value is not defined', () => {
    const { container } = render(<Select options={optionsMock} />);
    const selectComp = container.querySelector('.bi.bi-select').querySelector('.bi-select-placeholder');

    expect(selectComp).to.exist;
  });

  it('should accept a fluid prop', () => {
    const { container } = render(<Select fluid options={optionsMock} />);
    const selectComp = container.querySelector('.bi.bi-select');

    expect(selectComp.classList.contains('fluid')).to.be.true;
  });

  it('if provided, should perform the onChange callback when an option is selected', () => {
    const onChange = sinon.spy();

    const { container } = render(<Select options={optionsMock} value={optionsMock[1].value} onChange={onChange} />);
    const selectComp = container.querySelector('.bi.bi-select');

    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      const optionItem = floatingComponentsWrapper.getElementsByClassName('bi-select-opt')[0];
      fireEvent.click(optionItem);

      expect(onChange.called).to.equal(true);

      const currentArgs = onChange.args[0];
      expect(currentArgs[0]).to.equal(optionsMock[0].value, optionsMock, optionsMock[1].value);
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should close the dropdown when an option is selected & \'toggleOnChange\' is true (as it is by default)', () => {
    const { container } = render(<Select options={optionsMock} value={optionsMock[1].value} toggleOnChange />);
    const selectComp = container.querySelector('.bi.bi-select');
    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown')).to.exist;
      const optionItem = floatingComponentsWrapper.getElementsByClassName('bi-select-opt')[0];
      fireEvent.click(optionItem);
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown')).to.not.exist;
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should keep the dropdown open when selecting an option if \'toggleOnChange\' is set to false', () => {
    const { container } = render(<Select options={optionsMock} value={optionsMock[1].value} toggleOnChange={false} />);
    const selectComp = container.querySelector('.bi.bi-select');
    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown')).to.exist;
      const optionItem = floatingComponentsWrapper.getElementsByClassName('bi-select-opt')[0];
      fireEvent.click(optionItem);
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown')).to.exist;
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should perform the onChange when the \'close\' button is clicked', () => {
    const onChange = sinon.spy();
    const { container } = render(<Select options={optionsMock} onChange={onChange} value={optionsMock[1].value} />);
    const selectElement = container.querySelector('.bi-select-element');
    const closeButton = selectElement.querySelector('.sel-clear-x');

    fireEvent.click(closeButton);

    const currentArgs = onChange.args[0];

    expect(onChange.called).to.be.true;
    expect(currentArgs[0]).to.be.undefined;
    expect(currentArgs[1]).to.equal(optionsMock);
    expect(currentArgs[2]).to.equal(optionsMock[1].value);
  });

  it('should not show the \'clear\' button if the clearable prop is set to false', () => {
    const { container } = render(<Select options={optionsMock} clearable={false} />);
    const selectElement = container.querySelector('.bi-select-element');

    expect(selectElement.querySelector('.sel-clear-x')).to.not.exist;
  });

  it('should create a filtrable dropdown list if \'filtrable\' is true', () => {
    const { container } = render(<Select options={optionsMock} value={optionsMock[1].value} filtrable />);
    const selectComp = container.querySelector('.bi.bi-select');
    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown.filtrable')).to.exist;
      expect(floatingComponentsWrapper.querySelector('.bi-select-options-dropdown.filtrable input')).to.exist;
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should possibly change the filter\'s input placeholder if \'filterInputPlaceholder\' is well defined', () => {
    const filterInputPlaceholder = 'foo';
    const { container } = render(
      <Select options={optionsMock} value={optionsMock[1].value} filtrable filterInputPlaceholder="foo" />,
    );
    const selectComp = container.querySelector('.bi.bi-select');
    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      const dropdown = floatingComponentsWrapper.querySelector('.bi-select-options-dropdown.filtrable');
      const inputTag = dropdown.querySelector('.bi.bi-input.input-default > input');

      expect(inputTag).to.exist;
      expect(inputTag.placeholder).to.equal(filterInputPlaceholder);
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should possibly show a custom \'no results\' message if \'filterNoResultLabel\' is defined', () => {
    const filterNoResultLabel = 'foo';
    const { container } = render(
      <Select options={optionsMock} value={optionsMock[1].value} filtrable filterNoResultLabel="foo" />,
    );
    const selectComp = container.querySelector('.bi.bi-select');
    const floatingComponentsWrapper = document.getElementById('bi-floats');

    const waitingForDomChangesPromise = waitForDomChange({ container: floatingComponentsWrapper }).then(() => {
      const dropdown = floatingComponentsWrapper.querySelector('.bi-select-options-dropdown.filtrable');
      const inputTag = dropdown.querySelector(' .bi.bi-input.input-default > input');
      fireEvent.change(inputTag, { target: { value: 'quz' } });

      expect(floatingComponentsWrapper.querySelector('.no-results')).to.exist;
      expect(floatingComponentsWrapper.querySelector('.no-results').textContent).to.equal(filterNoResultLabel);
    });

    fireEvent.click(selectComp);

    return waitingForDomChangesPromise;
  });

  it('should change the multiple selection style when multiStyle is set to strings', () => {
    const optionsArray = ['foo', 'bar'];
    const { container } = render(<Select options={optionsMock} value={optionsArray} multiStyle="strings" />);
    const selectComp = container.querySelector('.bi.bi-select');
    expect(container.querySelector('.bi-select-element > span')).to.exist;
    expect(container.querySelector('.bi-select-element .bi.bi-pill')).to.not.exist;

    fireEvent.click(selectComp);
  });
});
