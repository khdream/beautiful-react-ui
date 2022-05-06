import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spinner from '.';

describe('Spinner component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Spinner />);

    should.exist(container);
    expect(container.querySelector('span')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector('span');
    const spinnerClasses = spinner.getAttribute('class');

    expect(spinnerClasses.split(' ')).to.include.members(['bi', 'bi-spinner', 'spinner-default', 'spinner-circle']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Spinner id="foo" />);
    const spinner = container.querySelector('span');

    expect(spinner.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Spinner className="foo" />);
    const spinner = container.querySelector('span');
    const spinnerClasses = spinner.getAttribute('class');

    expect(spinnerClasses.split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Spinner style={{ margin: '10px' }} />);
    const spinner = container.querySelector('span');

    expect(spinner.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should allow to define the spinner color', () => {
    const { container, rerender } = render(<Spinner color="primary" />);
    const spinner = container.querySelector('span');

    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spinner-primary']);
    expect(spinner.getAttribute('class').split(' ')).to.not.include.members(['spinner-default']);

    rerender(<Spinner color="warning" />);
    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spinner-warning']);

    rerender(<Spinner />);

    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spinner-default']);
    expect(spinner.getAttribute('class').split(' ')).to.not.include.members(['spinner-primary', 'spinner-warning']);
  });

  it('should allow to define the spinner size', () => {
    const { container, rerender } = render(<Spinner size="large" />);
    const spinner = container.querySelector('span');

    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spin-lg']);

    rerender(<Spinner size="small" />);
    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spin-sm']);

    rerender(<Spinner />);
    expect(spinner.getAttribute('class').split(' ')).to.not.include.members(['spin-sm', 'spin-lg']);
  });

  it('should allow to define the spinner type', () => {
    const { container, rerender } = render(<Spinner />);
    const spinner = container.querySelector('span');

    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spinner-circle']);

    rerender(<Spinner type="pulse" />);
    expect(spinner.getAttribute('class').split(' ')).to.include.members(['spinner-pulse']);
    expect(spinner.getAttribute('class').split(' ')).to.not.include.members(['spinner-circle']);
  });
});
