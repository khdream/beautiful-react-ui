const withUploadsData = (file) => ({ file, byteSent: 0, uploading: false });

/**
 * Takes an array of File instances and return an upload object.
 * This function is used by the FileUploader component to convert the File instances received from drag n drop or the
 * changes of the input tag to uploads objects.
 */
export default (files) => files.map(withUploadsData);
