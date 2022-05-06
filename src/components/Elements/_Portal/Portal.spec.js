import React from 'react';
import { render, cleanup } from '@testing-library/react';
import getPortalWrapper from './getPortalWrapper';
import Portal from './Portal';

describe('Portal private component', () => {
  afterEach(cleanup);

  it('should render its children outside the container (without explode)', () => {
    const { container } = render(
      <Portal id="portal-foo">
        <div className="div-class">
          foo
        </div>
      </Portal>,
    );

    expect(container.querySelector('#portal-foo')).to.equal(null);
    expect(document.querySelector('#portal-foo')).to.exist;
    expect(document.querySelector('#portal-foo').querySelector('.div-class')).to.exist;
  });
});

describe('getPortalWrapper utility', () => {
  afterEach(cleanup);

  it('should return the element with the given id', () => {
    const div = document.createElement('div');
    div.id = 'foo';
    document.body.appendChild(div);

    expect(getPortalWrapper('foo')).to.equal(div);

    div.remove();
  });

  it('should return a new element if the given id does not exists', () => {
    const div = document.createElement('div');
    div.id = 'foo';
    document.body.appendChild(div);

    const el = getPortalWrapper('bar');

    expect(el).to.not.equal(null);
    expect(el).to.be.instanceOf(HTMLDivElement);

    div.remove();
  });
});
