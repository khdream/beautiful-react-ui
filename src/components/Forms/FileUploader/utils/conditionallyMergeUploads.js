/**
 * A series of thunks that accept a boolean value and an uploads array, then returns a functions that receive
 * conditionally merges the uploads if the boolean value is true, otherwise returns the incoming uploads.
 * This function is used to manage the `multiple` prop within the FileUploader component.
 */
export default (multiple) => (uploads) => (nextUploads) => (
  multiple ? [...(uploads || []), ...nextUploads] : nextUploads
);
