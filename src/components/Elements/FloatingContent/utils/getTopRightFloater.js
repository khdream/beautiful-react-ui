import getAbsoluteTop from './getAbsoluteTop';
import getAbsoluteRight from './getAbsoluteRight';

const getTopRightFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => ({
  bottom: getAbsoluteTop(clientHeight, boundingRect, scrollY, offset),
  right: getAbsoluteRight(boundingRect, clientWidth),
  transform: 'translate(0%, 0%)',
});

export default getTopRightFloater;
