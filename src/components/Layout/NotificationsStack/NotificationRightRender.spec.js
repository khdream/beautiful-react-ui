import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { expect } from 'chai';
import NotificationRightRender from './NotificationRightRender';
import noop from '../../../../test/utils/noop';


describe('NotificationRightRender component', () => {
  afterEach(() => cleanup());


  it('should render without explode', () => {
    const { container } = render(<NotificationRightRender onToggle={noop} />);
    const elNode = container.querySelector('.notification-right-side');
    expect(container).to.exist;
    expect(elNode).to.exist;
  });

  it('should perform the onClose function when clicking on the x button', () => {
    const onToggleSpy = sinon.spy();
    const { container } = render(<NotificationRightRender onToggle={onToggleSpy} />);
    const closeButton = container.querySelector('.notification-right-side').querySelector('.bi.bi-btn');

    expect(closeButton).to.exist;

    fireEvent.click(closeButton);
    const firstCallArgs = onToggleSpy.args[0];

    expect(onToggleSpy.callCount).to.equal(1);
    expect(firstCallArgs[0]).to.exist;
  });
});
