import React from 'react';
import { render, cleanup, queryByText } from '@testing-library/react';
import Avatar from './Avatar';
import Pill from '../Pill/Pill';
import performStandardTests from '../../../../test/utils/performStandardTests';

describe('Avatar component', () => {
  afterEach(cleanup);

  const defaultProps = { src: 'foo' };

  performStandardTests(Avatar, defaultProps);

  it('should render and image if src prop is provided', () => {
    const { container } = render(<Avatar src="foo" />);
    const avatar = container.querySelector('.bi.bi-avatar');
    const image = avatar.querySelector('img');

    expect(image).to.exist;
    expect(image.getAttribute('src')).to.equal('foo');
  });

  it('should render the username initials if the `initials` prop is provided', () => {
    const { container } = render(<Avatar src="foo" initials="ar" />);
    const avatar = container.querySelector('.bi.bi-avatar');
    const initials = avatar.querySelector('.initials');

    expect(initials).to.exist;
  });

  it('should allow to define the avatar size', () => {
    const { container, rerender } = render(<Avatar src="foo" size="small" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-sm']);

    rerender(<Avatar src="foo" size="large" />);
    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-lg']);

    rerender(<Avatar src="foo" />);
    expect(avatar.getAttribute('class').split(' ')).to.not.include.members(['avt-lg', 'avt-sm']);
  });

  it('should allow to define the avatar shape', () => {
    const { container, rerender } = render(<Avatar src="foo" shape="square" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-square']);

    rerender(<Avatar src="foo" />);
    expect(avatar.getAttribute('class').split(' ')).to.include.members(['avt-rounded']);
  });

  it('should possibly have an alternative text', () => {
    const text = 'lorem ipsum';
    const { container } = render(<Avatar src="foo" alt={text} />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.querySelector('img').getAttribute('alt')).to.equal(text);
  });

  it('should possibly render a pill component if given as a prop', () => {
    const { container } = render(<Avatar src="foo" pill={<Pill>foo</Pill>} />);
    const pill = container.querySelector('.bi.bi-avatar').querySelector('.bi.bi-pill');

    expect(pill).to.exist;
    expect(pill.tagName).to.equal('SPAN');
  });

  it('should possibly render the online/offline state if provided', () => {
    const { container, rerender } = render(<Avatar src="foo" state="online" />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar.querySelector('.avt-state')).to.exist;
    expect(avatar.querySelector('.avt-state').classList.contains('state-online')).to.be.true;

    rerender(<Avatar src="foo" state="offline" />);

    expect(avatar.querySelector('.avt-state').classList.contains('state-offline')).to.be.true;
  });

  it('should possibly render further information if provided', () => {
    const displayName = 'Name';
    const furtherInfo = 'Role';
    const { container } = render(<Avatar src="foo" displayName={displayName} furtherInfo={furtherInfo} />);
    const nameElement = queryByText(container, displayName);
    const infoElement = queryByText(container, furtherInfo);

    expect(nameElement).to.exist;
    expect(nameElement.classList.contains('avtr-disp-name')).to.be.true;

    expect(infoElement).to.exist;
    expect(infoElement.classList.contains('avtr-furth-info')).to.be.true;
  });

  it('should return null iof no src nor initials are provided', () => {
    const { container } = render(<Avatar />);
    const avatar = container.querySelector('.bi.bi-avatar');

    expect(avatar).to.not.exist;
  });
});
