/**
 * Get dragging props...
 * TODO: better documentation
 */
const getDraggingFurtherProps = (draggable, onDragStart, onDragEnd) => (!draggable ? {} : {
  draggable: 'true',
  onDragStart,
  onDragEnd,
});

export default getDraggingFurtherProps;
