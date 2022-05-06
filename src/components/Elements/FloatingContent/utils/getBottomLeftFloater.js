import getAbsoluteBottom from './getAbsoluteBottom';
import getAbsoluteLeft from './getAbsoluteLeft';

const getBottomLeftFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteBottom(clientHeight, boundingRect, scrollY, offset),
  left: getAbsoluteLeft(boundingRect),
  transform: 'translateY(100%)',
});

export default getBottomLeftFloater;
