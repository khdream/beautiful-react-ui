import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Button from '../Button';
import Tooltip from '.';

describe('Tooltip component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const Trigger = (<Button>foo</Button>);

  it('should render without explode', () => {
    render(
      <Tooltip onToggle={noop} trigger={Trigger} isOpen>
        some text here
      </Tooltip>,
    );

    expect(document.querySelector('#bi-floats .bi.bi-popover')).to.exist;
  });

  it('should accept "id" prop', () => {
    render(
      <Tooltip onToggle={noop} trigger={Trigger} isOpen id="foo">
        some text here
      </Tooltip>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-popover');
    expect(popover.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    render(
      <Tooltip onToggle={noop} trigger={Trigger} isOpen className="foo">
        some text here
      </Tooltip>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-tooltip');
    expect(popover.classList.contains('foo')).to.be.true;
  });

  it('should allow adding custom style', () => {
    render(
      <Tooltip onToggle={noop} trigger={Trigger} isOpen style={{ margin: '10px' }}>
        some text here
      </Tooltip>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-popover');
    expect(popover.getAttribute('style')).equal('margin: 10px;');
  });

  it('should not render the Tooltip component if isOpen prop is set to false', () => {
    render(
      <Tooltip onToggle={noop} trigger={Trigger} isOpen={false}>
        some text here
      </Tooltip>,
    );

    expect(document.querySelector('#bi-floats .bi-tooltip')).not.to.exist;
  });

  it('should allow to define when to fire the "onToggle" callback', () => {
    const onToggleHoverSpy = sinon.spy();

    render(
      <Tooltip trigger={Trigger} isOpen action="hover" onToggle={onToggleHoverSpy}>
        some text here
      </Tooltip>,
    );

    const popupTrigger = document.querySelector('.bi-float-trigger');

    fireEvent.mouseOver(popupTrigger);

    expect(onToggleHoverSpy.calledOnce).to.be.true;
  });
});
