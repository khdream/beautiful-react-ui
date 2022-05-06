import getAbsoluteTop from './getAbsoluteTop';
import getAbsoluteLeft from './getAbsoluteLeft';

const getTopLeftFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteTop(clientHeight, boundingRect, scrollY, offset),
  left: getAbsoluteLeft(boundingRect),
});

export default getTopLeftFloater;
