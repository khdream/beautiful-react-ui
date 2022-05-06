import getAbsoluteRight from './getAbsoluteRight';
import getAbsoluteTop from './getAbsoluteTop';

const getLeftCenterFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => {
  const { width = 1, height = 1 } = boundingRect;

  return ({
    right: getAbsoluteRight(boundingRect, clientWidth) + width + offset,
    bottom: getAbsoluteTop(clientHeight, boundingRect, scrollY, offset) - offset - (height / 2),
    transform: 'translateY(50%)',
  });
};

export default getLeftCenterFloater;
