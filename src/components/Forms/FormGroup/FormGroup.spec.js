import React from 'react';
import { cleanup, render } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import FormGroup from './FormGroup';
import Input from '../Input';

describe('FormGroup component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(
      <FormGroup>
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );

    expect(container).to.exist;
    expect(container.querySelector('.bi.bi-fgroup')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(
      <FormGroup>
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );
    const el = container.querySelector('div');

    expect(el.classList.contains('bi')).to.be.true;
    expect(el.classList.contains('bi-fgroup')).to.be.true;
    expect(el.classList.contains('bi-vertical-fgroup')).to.be.true;
  });

  it('should accept an id prop', () => {
    const { container } = render(
      <FormGroup id="foo">
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );
    const el = container.querySelector('.bi.bi-fgroup');

    expect(el.id).to.equal('foo');
  });

  it('should accept custom classes', () => {
    const { container } = render(
      <FormGroup className="foo">
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );
    const el = container.querySelector('.bi.bi-fgroup');

    expect(el.classList.contains('foo')).to.be.true;
  });

  it('should accept custom style', () => {
    const { container } = render(
      <FormGroup style={{ margin: '10px' }}>
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );
    const el = container.querySelector('.bi.bi-fgroup');

    expect(el.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should accept an \'orientation\' prop', () => {
    const { container } = render(
      <FormGroup orientation="horizontal">
        <Input value="value" onChange={noop} />
      </FormGroup>,
    );
    const el = container.querySelector('.bi.bi-fgroup');

    expect(el.classList.contains('bi-horizontal-fgroup')).to.be.true;
  });
});
