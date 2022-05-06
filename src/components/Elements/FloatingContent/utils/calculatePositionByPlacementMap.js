import getTopLeftFloater from './getTopLeftFloater';
import getTopCenterFloater from './getTopCenterFloater';
import getTopRightFloater from './getTopRightFloater';
import getBottomLeftFloater from './getBottomLeftFloater';
import getBottomCenterFloater from './getBottomCenterFloater';
import getBottomRightFloater from './getBottomRightFloater';
import getLeftCenterFloater from './getLeftCenterFloater';
import getRightCenterFloater from './getRightCenterFloater';

const calculatePositionByPlacementMap = Object.freeze({
  'top-left': getTopLeftFloater,
  'top-center': getTopCenterFloater,
  'top-right': getTopRightFloater,
  'bottom-left': getBottomLeftFloater,
  'bottom-center': getBottomCenterFloater,
  'bottom-right': getBottomRightFloater,
  'left-center': getLeftCenterFloater,
  'right-center': getRightCenterFloater,
});

export default calculatePositionByPlacementMap;
