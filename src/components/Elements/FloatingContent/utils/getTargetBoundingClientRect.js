/**
 * In the context of the FloatingContent component, a span wrapper around the target React component is assumed.
 * This function tries to get its bounding client rect by accessing the span's children from the `element.children`
 * property, if it is not available or is empty we then use the span itself to get the bounding client rect.
 */
const getTargetBoundingClientRect = (element) => (
  element.children.length !== 0 ? element.children[0].getBoundingClientRect() : element.getBoundingClientRect()
);

export default getTargetBoundingClientRect;
