import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Placeholder from '.';

describe('Placeholder component', () => {
  afterEach(() => {
    sinon.restore();
    cleanup();
  });

  it('should render without explode', () => {
    const { container } = render(<Placeholder />);

    should.exist(container);
    expect(container.querySelector('.bi.bi-placeholder')).to.exist;
  });

  it('should have default classes', () => {
    const { container } = render(<Placeholder />);
    const placeholder = container.querySelector('div');

    expect(placeholder.getAttribute('class').split(' ')).to.include.members(['bi', 'bi-placeholder']);
  });

  it('should accept an "id" prop', () => {
    const { container } = render(<Placeholder id="foo" />);
    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.id).to.equal('foo');
  });

  it('should allow adding custom classes', () => {
    const { container } = render(<Placeholder className="foo" />);
    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.getAttribute('class').split(' ')).to.include.members(['foo']);
  });

  it('should allow to define custom style', () => {
    const { container } = render(<Placeholder style={{ margin: '10px' }} />);
    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.getAttribute('style')).to.equal('margin: 10px;');
  });

  it('should show a given number of paragraphs', () => {
    const paragraphs = 10;
    const { container } = render(<Placeholder paragraphs={paragraphs} />);

    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.querySelectorAll('.bi-placeholder-paragraph').length).to.equal(paragraphs);
  });

  it('should possibly show a title-resembling block', () => {
    const { container } = render(<Placeholder title />);

    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.querySelector('.bi-placeholder-title')).to.exist;
  });

  it('should possibly show an image-resembling block', () => {
    const { container } = render(<Placeholder image="rounded" />);

    const placeholder = container.querySelector('.bi.bi-placeholder');

    expect(placeholder.getAttribute('class').split(' ')).to.include.members(['img-placeholder', 'img-rounded']);
    expect(placeholder.querySelector('.bi-placeholder-img')).to.exist;
  });
});
