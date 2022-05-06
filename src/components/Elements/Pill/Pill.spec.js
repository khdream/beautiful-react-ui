import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Pill from '.';

describe('Pill component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });


  it('it should render withouw explode', () => {
    const { container } = render(<Pill>Join us!</Pill>);

    should.exist(container);
    expect(container.querySelector('.bi.bi-pill')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Pill>Join us!</Pill>);
    const pills = container.querySelector('.bi.bi-pill');

    expect(pills.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-pill']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Pill id="join">Join us!</Pill>);
    const pills = container.querySelector('.bi.bi-pill');

    expect(pills.id).to.equal('join');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Pill className="test">Join us!</Pill>);
    const pills = container.querySelector('.bi.bi-pill');

    expect(pills.getAttribute('class').split(' ')).to.include.members(['test']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Pill style={{ background: 'brown' }}>Join us!</Pill>);
    const pills = container.querySelector('.bi.bi-pill');

    expect(pills.getAttribute('style')).to.equal('background: brown;');
  });

  it('if href prop is not null, should then create tag <a> instead of <span>', () => {
    const { container, rerender } = render(<Pill href="/joinus">Join us!</Pill>);
    const link = container.querySelector('.bi.bi-pill');

    expect(link.tagName).to.equal('A');

    rerender(<Pill>Join us!</Pill>);
    const span = container.querySelector('.bi.bi-pill');

    expect(span.tagName).to.equal('SPAN');
  });

  it('should allow to define the pill color', () => {
    const { container, rerender } = render(<Pill color="secondary"> Join us!</Pill>);
    const firstColor = container.querySelector('.bi.bi-pill');

    expect(firstColor.getAttribute('class').split(' ')).to.include.members(['pill-secondary']);
    expect(firstColor.getAttribute('class').split(' ')).to.not.include.members(['pill-default']);

    rerender(<Pill color="danger"> Join us!</Pill>);
    const secondColor = container.querySelector('.bi.bi-pill');
    expect(secondColor.getAttribute('class').split(' ')).to.include.members(['pill-danger']);
    expect(secondColor.getAttribute('class').split(' ')).to.not.include.members(['pill-secondary']);

    rerender(<Pill> Join us!</Pill>);
    const noColor = container.querySelector('.bi.bi-pill');
    expect(noColor.getAttribute('class').split(' ')).to.include.members(['pill-default']);
    expect(noColor.getAttribute('class').split(' ')).to.not.include.members(['pill-danger', 'pill-secondary']);
  });

  it('it should possibly run a render function', () => {
    const spy = sinon.spy();
    render(<Pill render={spy}>Join us!</Pill>);

    expect(spy.calledOnce).to.be.equal(true);
  });

  it('should allow to define the pill shape', () => {
    const { container, rerender } = render(<Pill>rounded</Pill>);
    const pill = container.querySelector('.bi.bi-pill');

    expect(pill.getAttribute('class').split(' ')).to.include.members(['pill-rounded']);

    rerender(<Pill rounded={false}>not rounded</Pill>);
    expect(pill.getAttribute('class').split(' ')).to.not.include.members(['pill-rounded']);
  });
});
