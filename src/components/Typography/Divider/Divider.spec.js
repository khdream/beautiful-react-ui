import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Divider from './Divider';

describe('Divider component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Divider />);

    expect(container).to.exist;
    expect(container.querySelector('.bi-divider')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Divider />);
    const dividerEl = container.querySelector('div');

    expect(dividerEl.classList.contains('bi')).to.be.true;
    expect(dividerEl.classList.contains('bi-divider')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Divider id="foo" />);
    const dividerEl = container.querySelector('.bi.bi-divider');

    expect(dividerEl.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(<Divider className="foo" />);
    const dividerEl = container.querySelector('.bi-divider');

    expect(dividerEl.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Divider style={{ margin: '10px' }} />);
    const dividerEl = container.querySelector('.bi.bi-divider');

    expect(dividerEl.getAttribute('style')).to.equal('margin: 10px;');
  });
});
