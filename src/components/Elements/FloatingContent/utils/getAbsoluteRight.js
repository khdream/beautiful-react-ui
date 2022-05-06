/**
 * Takes a bounding rect of a given element and the full client width, then returns the element absolute right
 * @param boundingRect
 * @param clientWidth
 * @returns {number}
 */
const getAbsoluteRight = (boundingRect, clientWidth) => {
  const { width = 1, left = 0 } = boundingRect;

  return clientWidth - left - width;
};

export default getAbsoluteRight;
