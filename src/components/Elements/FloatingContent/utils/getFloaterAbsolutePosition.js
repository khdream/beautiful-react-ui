import getTargetBoundingClientRect from './getTargetBoundingClientRect';
import calculatePositionByPlacementMap from './calculatePositionByPlacementMap';

/**
 * Returns the absolute position of a given HTML element to the document.
 */
const getFloaterAbsolutePosition = (el, placement = 'top-center', offset = 0, setWidth = false) => {
  const { clientHeight, clientWidth } = document.body;
  const { pageYOffset } = window;
  const boundingRect = getTargetBoundingClientRect(el);
  const calculatePosition = calculatePositionByPlacementMap[placement];
  const position = calculatePosition(boundingRect, clientHeight, clientWidth, pageYOffset, offset);

  return ({ ...position, ...setWidth && { width: boundingRect.width } });
};

export default getFloaterAbsolutePosition;
