import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from 'chai';
import NotificationContent from './NotificationContent';


describe('NotificationContent component', () => {
  afterEach(() => cleanup());

  it('should render without explode', () => {
    const { container } = render(<NotificationContent />);
    const elNode = container.querySelector('.notification-content');

    expect(container).to.exist;
    expect(elNode).to.exist;
  });

  it('should render an title if provided', () => {
    const { container } = render(<NotificationContent title="bar" content="foo" />);
    const elNode = container.querySelector('.notification-content').querySelector('.bi-title');

    expect(container).to.exist;
    expect(elNode).to.exist;
  });
});
