import getAbsoluteTop from './getAbsoluteTop';
import getAbsoluteCenter from './getAbsoluteCenter';

const getTopCenterFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteTop(clientHeight, boundingRect, scrollY, offset),
  right: getAbsoluteCenter(boundingRect, clientWidth),
  transform: 'translateX(50%)',
});

export default getTopCenterFloater;
