/**
 * Accepts a boolean value and returns a functions that converts a FileList to an array of File instances.
 * If the boolean value is set to false it returns an array of one single item.
 * This function is used to manage the `multiple` prop within the FileUploader component.
 */
const getFilesBySelectionType = (multiple = false) => (files) => {
  const filesArray = Array.from(files);

  if (!multiple) {
    filesArray.length = 1;
  }

  return filesArray;
};

export default getFilesBySelectionType;
