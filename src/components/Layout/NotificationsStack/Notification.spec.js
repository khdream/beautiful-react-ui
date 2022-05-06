import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from 'chai';
import Notification from './Notification';
import noop from '../../../../test/utils/noop';


describe('Notification component', () => {
  afterEach(() => cleanup());

  const defaultProps = {
    onToggle: noop,
    closable: true,
    title: 'foo',
    content: 'bar',
    icon: 'home',
    timeout: 5000,
    color: 'success',
  };

  it('should render without explode', () => {
    const { container } = render(<Notification {...defaultProps} />);
    const elNode = container.querySelector('.bi-notification');
    expect(container).to.exist;
    expect(elNode).to.exist;
  });
});
