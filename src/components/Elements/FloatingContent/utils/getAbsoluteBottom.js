/**
 * Takes a bounding rect of a given element and the full client width, then returns the element absolute bottom
 * @param clientHeight
 * @param boundingRect
 * @param scrollY
 * @param offset
 * @returns {number}
 */
const getAbsoluteBottom = (clientHeight, boundingRect, scrollY, offset) => {
  const { height = 0, top = 0 } = boundingRect;

  return clientHeight - height - top - scrollY - offset;
};

export default getAbsoluteBottom;
