import React from 'react';
import { render, cleanup } from '@testing-library/react';
import noop from '../../../../test/utils/noop';
import Button from '../Button';
import DropDown from '.';

describe('DropDown component', () => {
  afterEach(cleanup);

  const Trigger = (<Button>foo</Button>);

  it('should render without explode', () => {
    render(
      <DropDown onToggle={noop} trigger={Trigger} isShown>
        <DropDown.Button>Lorem</DropDown.Button>
        <DropDown.Divider />
        <DropDown.Link href="#">Lorem</DropDown.Link>
      </DropDown>,
    );

    expect(document.querySelector('#bi-floats .bi.bi-dropdown')).to.exist;
  });

  it('should accept "id" prop', () => {
    render(
      <DropDown onToggle={noop} trigger={Trigger} isShown id="foo">
        <DropDown.Button>Lorem</DropDown.Button>
        <DropDown.Divider />
        <DropDown.Link href="#">Lorem</DropDown.Link>
      </DropDown>,
    );

    const ddEl = document.querySelector('#bi-floats .bi.bi-dropdown');
    expect(ddEl.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    render(
      <DropDown onToggle={noop} trigger={Trigger} isShown className="foo">
        <DropDown.Button>Lorem</DropDown.Button>
        <DropDown.Divider />
        <DropDown.Link href="#">Lorem</DropDown.Link>
      </DropDown>,
    );

    const ddEl = document.querySelector('#bi-floats .bi.bi-dropdown');
    expect(ddEl.classList.contains('foo')).to.be.true;
  });

  it('should not render the DropDown component if isShown prop is set to false', () => {
    render(
      <DropDown onToggle={noop} trigger={Trigger} isShown={false}>
        <DropDown.Button>Lorem</DropDown.Button>
        <DropDown.Divider />
        <DropDown.Link href="#">Lorem</DropDown.Link>
      </DropDown>,
    );

    expect(document.querySelector('#bi-floats .bi-dropdown')).not.to.exist;
  });

  it('should allow adding custom style', () => {
    render(
      <DropDown onToggle={noop} trigger={Trigger} isShown style={{ margin: '10px' }}>
        <DropDown.Button>Lorem</DropDown.Button>
        <DropDown.Divider />
        <DropDown.Link href="#">Lorem</DropDown.Link>
      </DropDown>,
    );

    const ddEl = document.querySelector('#bi-floats .bi.bi-dropdown');
    expect(ddEl.getAttribute('style')).equal('margin: 10px;');
  });
});
