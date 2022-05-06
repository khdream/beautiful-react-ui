import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from 'chai';
import NotificationLeftRender from './NotificationLeftRender';

describe('NotificationLeftRender component', () => {
  afterEach(() => cleanup());

  it('should render without explode', () => {
    const { container } = render(<NotificationLeftRender />);
    const elNode = container.querySelector('.notification-left-side');

    expect(container).to.exist;
    expect(elNode).to.exist;
  });


  it('should render an icon if provided', () => {
    const { container } = render(<NotificationLeftRender icon="heart" />);
    const elNode = container.querySelector('.notification-left-side').querySelector('.bi.bi-icon');

    expect(container).to.exist;
    expect(elNode).to.exist;
  });

  it('should render an avatar if provided', () => {
    const { container } = render(<NotificationLeftRender avatar="https://placeimg.com/96/96/people" />);
    const elNode = container.querySelector('.notification-left-side').querySelector('.bi.bi-avatar');

    expect(container).to.exist;
    expect(elNode).to.exist;
  });
});
