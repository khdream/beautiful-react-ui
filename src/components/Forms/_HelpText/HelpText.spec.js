import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HelpText from '.';

describe('HelpText component', () => {
  afterEach(cleanup);

  it('should render without explode', () => {
    const { container } = render(<HelpText text="foo" />);

    should.exist(container);
    expect(container.querySelector('p')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<HelpText text="foo" />);
    const helpText = container.querySelector('p');

    expect(helpText.classList.contains('bi-helptext')).to.be.true;
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<HelpText text="foo" id="foo" />);
    const helpText = container.querySelector('p');

    expect(helpText.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<HelpText text="foo" className="foo" />);
    const helpText = container.querySelector('p');

    expect(helpText.classList.contains('foo')).to.be.true;
  });

  it('should allow to define custom style', () => {
    const { container } = render(<HelpText text="foo" style={{ margin: '10px' }} />);
    const helpText = container.querySelector('p');

    expect(helpText.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('must have a text prop', () => {
    const { getByText } = render(<HelpText text="foo" />);
    const possibleHelpText = getByText(/foo/);

    expect(possibleHelpText.tagName).to.equal('P');
    expect(possibleHelpText.textContent).to.equal('foo');
  });
});
