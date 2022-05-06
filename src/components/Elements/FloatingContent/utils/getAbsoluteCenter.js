/**
 * Takes a bounding rect of a given element and the full client width, then returns the element absolute center
 * @param boundingRect
 * @param clientWidth
 * @returns {number}
 */
const getAbsoluteCenter = (boundingRect, clientWidth) => {
  const { width = 1, left = 0 } = boundingRect;

  return clientWidth - left - (width / 2);
};

export default getAbsoluteCenter;
