import { useCallback, useRef } from 'react';
import { useDropZone } from 'beautiful-react-hooks';
import getNextUploadsBy from './getNextUploadsBy';
import removeUploadAt from './removeUploadAt';

/**
 * This hook wraps up the business logic of the FileUploader component in order to keep a clean code
 */
const useFileUploadHandlers = (uploads, multiple, onChange) => {
  const dropZoneRef = useRef(); // the input element ref, used to trigger the click event
  const inputRef = useRef(); // the input element ref, used to trigger the click event
  const { onDrop, isOver } = useDropZone(dropZoneRef);

  /**
   * When the input changes, trigger the `onChange` function passing the event and the new uploads
   */
  const onFilesChange = useCallback((event) => {
    if (onChange && event.target.files.length > 0) {
      const getNextUploads = getNextUploadsBy(multiple)(uploads);
      const nextUploads = getNextUploads(event.target.files);

      onChange(event, nextUploads);
    }
  }, [uploads, onChange]);

  /**
   * When the remove button is pressed, remove a file from the index
   */
  const onFileRemove = useCallback((index) => (event) => {
    if (onChange) {
      const removeUpload = removeUploadAt(index);
      const nextUploads = removeUpload(uploads);

      onChange(event, nextUploads);
    }
  }, [uploads, onChange]);

  /**
   * On drop handler
   */
  onDrop((event) => {
    const getNextUploads = getNextUploadsBy(multiple)(uploads);
    const nextUploads = getNextUploads(event.dataTransfer.files);

    onChange(event, nextUploads);
    event.preventDefault();
  });

  /**
   * Click handler
   */
  const clickHandler = useCallback((e) => {
    if (inputRef.current) {
      e.stopPropagation();
      inputRef.current.click();
    }
  }, [inputRef.current]);


  return { onFilesChange, onFileRemove, clickHandler, isOver, dropZoneRef, inputRef };
};

export default useFileUploadHandlers;
