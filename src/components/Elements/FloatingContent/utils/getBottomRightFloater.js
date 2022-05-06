import getAbsoluteBottom from './getAbsoluteBottom';
import getAbsoluteRight from './getAbsoluteRight';

const getBottomRightFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteBottom(clientHeight, boundingRect, scrollY, offset),
  right: getAbsoluteRight(boundingRect, clientWidth),
  transform: 'translateY(100%)',
});

export default getBottomRightFloater;
