/**
 * A thunk that remove the item at the defined index.
 * @param index
 * @returns {function(*): *[]}
 */
const removeUploadAt = (index) => (uploads) => {
  const nextUploads = [...uploads];
  nextUploads.splice(index, 1);

  return nextUploads;
};

export default removeUploadAt;
