import getAbsoluteLeft from './getAbsoluteLeft';
import getAbsoluteTop from './getAbsoluteTop';

const getRightCenterFloater = (boundingRect, clientHeight, clientWidth, scrollY, offset) => {
  const { width, height } = boundingRect;

  return ({
    left: getAbsoluteLeft(boundingRect) + width + offset,
    bottom: getAbsoluteTop(clientHeight, boundingRect, scrollY, offset) - offset - (height / 2),
    transform: 'translateY(50%)',
  });
};

export default getRightCenterFloater;
