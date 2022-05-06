import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Accordion from './index';

describe('Accordion component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="Title">
          Lorem ipsum
        </Accordion.Content>
      </Accordion>,
    );

    const accordionEl = container.querySelector('div');

    expect(container).to.exist;
    expect(accordionEl).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );
    const accordionEl = container.querySelector('div');

    expect(accordionEl.classList.contains('bi')).to.be.true;
    expect(accordionEl.classList.contains('bi-accordion')).to.be.true;
    expect(accordionEl.classList.contains('bi-accordion-default')).to.be.true;

    const childrenEl = accordionEl.querySelector('.bi.bi-accordion > div');

    expect(childrenEl.classList.contains('bi')).to.be.true;
    expect(childrenEl.classList.contains('bi-accordion-item')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} id="foo">
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );

    const accordionEl = container.querySelector('.bi.bi-accordion');

    expect(accordionEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} className="foo">
        <Accordion.Content title="Title">
          Lorem ipsum
        </Accordion.Content>
      </Accordion>,
    );

    const accordionEl = container.querySelector('.bi.bi-accordion');

    expect(accordionEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1} style={{ margin: '30px' }}>
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );
    const accordion = container.querySelector('.bi.bi-accordion');

    expect(accordion.getAttribute('style')).to.equal('margin: 30px;');
  });

  it('should allow to change accordion link color', () => {
    const { container, rerender } = render(
      <Accordion onChange={noop} active={1} color="primary">
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );

    const accordionEl = container.querySelector('.bi.bi-accordion');

    expect(accordionEl.classList.contains('bi-accordion-primary')).to.be.true;
    expect(accordionEl.classList.contains('bi-accordion-default')).to.be.false;

    rerender(
      <Accordion onChange={noop} active={1} color="secondary">
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordionEl.classList.contains('bi-accordion-secondary')).to.be.true;
    expect(accordionEl.classList.contains('bi-accordion-primary')).to.be.false;

    rerender(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="Title">
          Lorem ipsum...
        </Accordion.Content>
      </Accordion>,
    );

    expect(accordionEl.classList.contains('bi-accordion-default')).to.be.true;
    expect(accordionEl.classList.contains('bi-accordion-secondary')).to.be.false;
  });

  it('should render the provided number of Accordion.Content', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="Title 1">
          Lorem ipsum
        </Accordion.Content>
        <Accordion.Content title="Title 2">
          Lorem ipsum 2
        </Accordion.Content>
        <Accordion.Content title="Title 3">
          Lorem ipsum 3
        </Accordion.Content>
      </Accordion>,
    );

    const contentsLen = container.querySelectorAll('.bi-accordion-item').length;

    expect(contentsLen).to.equal(3);
  });

  it('could show one element per time', () => {
    const { container } = render(
      <Accordion onChange={noop} active={1}>
        <Accordion.Content title="Title 1">
          Lorem ipsum
        </Accordion.Content>
        <Accordion.Content title="Title 2">
          Lorem ipsum 2
        </Accordion.Content>
        <Accordion.Content title="Title 3">
          Lorem ipsum 3
        </Accordion.Content>
      </Accordion>,
    );

    const activeEl = container.querySelector('.bi.bi-accordion-item.bi-item-open');

    expect(activeEl).to.exist;
  });

  it('could show more than one element per time', () => {
    const { container } = render(
      <Accordion onChange={noop} active={[1, 2]}>
        <Accordion.Content title="Title 1">
          Lorem ipsum
        </Accordion.Content>
        <Accordion.Content title="Title 2">
          Lorem ipsum 2
        </Accordion.Content>
        <Accordion.Content title="Title 3">
          Lorem ipsum 3
        </Accordion.Content>
      </Accordion>,
    );

    const activeEl = container.querySelectorAll('.bi-item-open');

    expect(activeEl.length).to.equal(2);
  });

  it('should fire the onChange callback when switching between panels', () => {
    const onChangeSpy = sinon.spy();
    const { container } = render(
      <Accordion onChange={onChangeSpy} active={1}>
        <Accordion.Content title="Title 1">
          Lorem ipsum
        </Accordion.Content>
        <Accordion.Content title="Title 2">
          Lorem ipsum 2
        </Accordion.Content>
        <Accordion.Content title="Title 3">
          Lorem ipsum 3
        </Accordion.Content>
      </Accordion>,
    );

    const firstItemButton = container.querySelector('.bi-accordion-toggle');

    fireEvent.click(firstItemButton);

    expect(onChangeSpy.calledOnce).to.be.equal(true);
  });
});
