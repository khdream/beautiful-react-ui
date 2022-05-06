import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from 'chai';
import NotificationsStack from './NotificationsStack';


describe('NotificationsStack component', () => {
  const notifications = [{ id: 1, content: 'foo' }];
  const onToggleSpy = sinon.spy();

  afterEach(() => {
    cleanup();
    sinon.restore();
  });


  it('should render without explode', () => {
    render(<NotificationsStack notifications={notifications} onChange={onToggleSpy} />);

    expect(document.querySelector('#bi-notification-stack')).to.exist;
  });

  it('should render notifications', () => {
    render(<NotificationsStack notifications={notifications} onChange={onToggleSpy} />);

    expect(document.querySelector('#bi-notification-stack').querySelector('.bi.bi-notification')).to.exist;
  });
});
