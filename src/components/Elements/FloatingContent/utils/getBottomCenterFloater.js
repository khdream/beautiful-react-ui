import getAbsoluteBottom from './getAbsoluteBottom';
import getAbsoluteCenter from './getAbsoluteCenter';

const getBottomCenterFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteBottom(clientHeight, boundingRect, scrollY, offset),
  right: getAbsoluteCenter(boundingRect, clientWidth),
  transform: 'translate(50%, 100%)',
});

export default getBottomCenterFloater;
