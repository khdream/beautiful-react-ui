import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Title from '../../Typography/Title';
import Paragraph from '../../Typography/Paragraph';
import List from '../../Layout/List';
import FileItem from './FileItem';
import useFileUploadHandlers from './utils/useFileUploaderHandlers';
import { IconProp, makeIconFromProp } from '../../../shared';

import './file-uploader.scss';

/**
 * A FileUploader is a controlled component providing drag n' drop functionality for file uploads.<br />
 * It also provides file preview when possible or file icons as a fallback.
 */
const FileUploader = (props) => {
  const {
    uploads, onChange, icon, title, subtitle, multiple, accept, uploadingFn, removeLabel, uploadingLabel,
    ElementRender, TitleRender, SubtitleRender, ListRender, FileItemRender, className, ...rest
  } = props;
  const fuHandlers = useFileUploadHandlers(uploads, multiple, onChange);
  const { onFilesChange, onFileRemove, clickHandler, dropZoneRef, inputRef, isOver } = fuHandlers;

  const classList = useMemo(() => classNames('bi bi-file-uploader', {
    'file-dropping': isOver,
  }, className), [className, isOver]);


  return (
    <ElementRender className={classList} onClick={clickHandler} tabIndex={0} role="button" {...rest}>
      <div className="bi-file-uploader-content" ref={dropZoneRef}>
        <div className="bi-drop-icon">
          {!!icon && makeIconFromProp(icon)}
        </div>
        <TitleRender tagName="h4">{title}</TitleRender>
        {subtitle && (<SubtitleRender>{subtitle}</SubtitleRender>)}
      </div>
      {uploads && uploads.length > 0 && (
        <ListRender bordered className="bi bi-uploaded-files">
          {uploads.map((upload, index) => (
            <FileItemRender
              removeLabel={removeLabel}
              key={upload.file.name}
              file={upload.file}
              uploadingFn={uploadingFn}
              uploadingLabel={uploadingLabel}
              onRemove={onFileRemove(index)}
            />
          ))}
        </ListRender>
      )}
      <input type="file" accept={accept} multiple={multiple} ref={inputRef} onChange={onFilesChange} />
    </ElementRender>
  );
};

FileUploader.propTypes = {
  /**
   * The array of the current uploading files.
   */
  uploads: PropTypes.arrayOf(PropTypes.shape({
    file: PropTypes.instanceOf(File).isRequired,
    byteSent: PropTypes.number,
    uploading: PropTypes.bool,
  })),
  /**
   * The callback to be performed when input's value changes
   */
  onChange: PropTypes.func,
  /**
   * The function to be performed whilst performing an upload.
   * Receives the file to upload and the 'next' callback.
   * The next callback should be performed to update the file state by passing the uploading state
   */
  uploadingFn: PropTypes.func,
  /**
   * Defines the FileUploader content title
   */
  title: PropTypes.string,
  /**
   * Defines the FileUploader content subtitle
   */
  subtitle: PropTypes.string,
  /**
   * The icon to be displayed in the middle of the FileUploader content.
   * A valid Icon component name prop or the instance of an Icon component are both valid values.
   */
  icon: IconProp,
  /**
   * Defines whether the component should allows the user to select more than one file
   */
  multiple: PropTypes.bool,
  /**
   * Defines one or more unique file type specifiers describing file types to allow
   */
  accept: PropTypes.string,
  /**
   * The "remove" label locale
   */
  removeLabel: PropTypes.string,
  /**
   * The "uploading" label locale
   */
  uploadingLabel: PropTypes.string,
  /**
   * A renderer to replace the standard FileUploader element
   */
  ElementRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard Title component
   */
  TitleRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard Subtitle component
   */
  SubtitleRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard FileItem component
   */
  FileItemRender: PropTypes.elementType,
  /**
   * A renderer to replace the standard List component
   */
  ListRender: PropTypes.elementType,
};

FileUploader.defaultProps = {
  uploads: undefined,
  onChange: undefined,
  uploadingFn: undefined,
  title: 'Drop file(s) here or click to upload',
  removeLabel: 'Remove',
  uploadingLabel: 'Uploading',
  subtitle: undefined,
  multiple: false,
  accept: undefined,
  icon: 'cloud-upload-alt',
  TitleRender: Title,
  SubtitleRender: Paragraph,
  ElementRender: 'div',
  FileItemRender: FileItem,
  ListRender: List,
};

export default React.memo(FileUploader);
