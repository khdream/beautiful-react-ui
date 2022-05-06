/**
 * Takes a bounding rect of a given element and the full client width, then returns the element absolute right
 * @param clientHeight
 * @param boundingRect
 * @param scrollY
 * @param offset
 * @returns {*}
 */
const getAbsoluteTop = (clientHeight, boundingRect, scrollY, offset) => {
  const { top = 0 } = boundingRect;

  return clientHeight - top - scrollY + offset;
};

export default getAbsoluteTop;
