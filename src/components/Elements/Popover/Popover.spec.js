import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Button from '../Button';
import Popover from '.';

describe('Popover component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  const Trigger = (<Button>foo</Button>);

  it('should render without explode', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen>
        some text here
      </Popover>,
    );

    expect(document.querySelector('#bi-floats .bi.bi-popover')).to.exist;
  });

  it('should accept "id" prop', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen id="foo">
        some text here
      </Popover>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-popover');
    expect(popover.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen className="foo">
        some text here
      </Popover>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-popover');
    expect(popover.classList.contains('foo')).to.be.true;
  });

  it('should not render the Popover component if isOpen prop is set to false', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen={false}>
        some text here
      </Popover>,
    );

    expect(document.querySelector('#bi-floats .bi-popover')).not.to.exist;
  });

  it('should allow to define when to fire the "onToggle" callback', () => {
    const onToggleHoverSpy = sinon.spy();

    render(
      <Popover trigger={Trigger} isOpen action="hover" onToggle={onToggleHoverSpy}>
        some text here
      </Popover>,
    );

    const popupTrigger = document.querySelector('.bi-float-trigger');

    fireEvent.mouseOver(popupTrigger);

    expect(onToggleHoverSpy.calledOnce).to.be.true;
  });

  it('should allow to define the popover title', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen title="some title">
        some text here
      </Popover>,
    );

    const popoverTitle = document.querySelector('#bi-floats .bi.bi-popover .bi-popover-title');
    expect(popoverTitle).to.exist;
  });

  it('should allow adding custom style', () => {
    render(
      <Popover onToggle={noop} trigger={Trigger} isOpen style={{ margin: '10px' }}>
        some text here
      </Popover>,
    );

    const popover = document.querySelector('#bi-floats .bi.bi-popover');
    expect(popover.getAttribute('style')).equal('margin: 10px;');
  });
});
