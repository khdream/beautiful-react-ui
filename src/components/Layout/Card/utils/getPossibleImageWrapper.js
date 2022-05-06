import { Fragment } from 'react';

/**
 * Returns a div and its props if the current card needs to wrap the image
 * @param reversed
 * @param orientation
 */
const getPossibleImageWrapper = (reversed, orientation) => {
  const needsTheWrapper = (reversed && orientation === 'horizontal');
  const PossibleImageWrapper = needsTheWrapper ? 'div' : Fragment;
  const possibleImageWrapperProps = needsTheWrapper ? { className: 'icon-img-container' } : {};

  return [PossibleImageWrapper, possibleImageWrapperProps];
};

export default getPossibleImageWrapper;
