import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Link from '.';

describe('Link component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<Link href="/" />);

    should.exist(container);
    expect(container.querySelector('a')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Link href="/">Hello Link</Link>);
    const anchorEl = container.querySelector('a');

    expect(anchorEl.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-link', 'bi-link-primary']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Link href="/" id="foo">Hello Link</Link>);
    const anchorEl = container.querySelector('a');

    expect(anchorEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Link href="/" className="foo">Hello Link</Link>);
    const anchorEl = container.querySelector('a');

    expect(anchorEl.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Link href="/" style={{ margin: '10px' }}>Hello Link</Link>);
    const anchorEl = container.querySelector('a');

    expect(anchorEl.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should render the given child string', () => {
    const { getByText } = render(<Link href="/">Hello Link</Link>);

    expect(getByText(/Hello Link/).textContent).to.equal('Hello Link');
  });

  it('should set the mandatory prop href', () => {
    const href = '/';
    const { container } = render(<Link href={href}>Hello Link</Link>);
    const anchorEl = container.querySelector('a');


    expect(anchorEl.getAttribute('href')).to.equal(href);
  });

  it('should allow to define the link color', () => {
    const { container, rerender } = render(<Link href="/" color="warning">Hello Link</Link>);
    const anchorEl = container.querySelector('a');

    expect(anchorEl.getAttribute('class').split(' ')).to.include.members(['bi-link-warning']);
    expect(anchorEl.getAttribute('class').split(' ')).to.not.include.members(['bi-link-primary']);

    rerender(<Link href="/" color="danger">Hello Link</Link>);
    expect(anchorEl.getAttribute('class').split(' ')).to.include.members(['bi-link-danger']);

    rerender(<Link href="/">Hello Link</Link>);
    expect(anchorEl.getAttribute('class').split(' ')).to.include.members(['bi-link-primary']);
    expect(anchorEl.getAttribute('class').split(' ')).to.not.include.members(['bi-link-warning', 'bi-link-danger']);
  });
});
