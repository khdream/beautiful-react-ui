import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ButtonGroup from '.';
import Button from '../Button';

describe('ButtonGroup component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<ButtonGroup><Button /></ButtonGroup>);

    should.exist(container);
    expect(container.querySelector('.bi-btn-group')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<ButtonGroup><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-btn-group', 'btn-group-default']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<ButtonGroup id="foo"><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<ButtonGroup className="foo"><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<ButtonGroup style={{ margin: '10px' }}><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render the given children buttons', () => {
    const { container } = render(<ButtonGroup><Button id="foo" /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.querySelector('button')).to.exist;
    expect(group.querySelector('button').id).to.equal('foo');
  });

  it('should allow to define the group color', () => {
    const { container } = render(<ButtonGroup color="primary"><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['btn-group-primary']);
    expect(group.querySelector('button').getAttribute('class').split(' ')).to.include.members(['btn-primary']);
  });

  it('should allow to define the group size', () => {
    const { container } = render(<ButtonGroup size="large"><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.querySelector('button').getAttribute('class').split(' ')).to.include.members(['btn-lg']);
  });

  it('should allow to apply the outline style to all group buttons', () => {
    const { container } = render(<ButtonGroup outline><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['group-outline']);
    expect(group.querySelector('button').getAttribute('class').split(' ')).to.include.members(['btn-outline']);
  });

  it('should allow to apply the rounded style to all group buttons', () => {
    const { container } = render(<ButtonGroup rounded><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['group-rounded']);
    expect(group.querySelector('button').getAttribute('class').split(' ')).to.include.members(['btn-rounded']);
  });

  it('should allow to apply the fluid style to all group buttons', () => {
    const { container } = render(<ButtonGroup fluid><Button /></ButtonGroup>);
    const group = container.querySelector('.bi-btn-group');

    expect(group.getAttribute('class').split(' ')).to.include.members(['group-fluid']);
  });
});
