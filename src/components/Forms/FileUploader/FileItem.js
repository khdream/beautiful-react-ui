import React, { useEffect, useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import List from '../../Layout/List';
import Button from '../../Elements/Button';
import Paragraph from '../../Typography/Paragraph';
import fileIcons from './fileIcons';
import Avatar from '../../Elements/Avatar';
import ProgressBar from '../../Elements/ProgressBar';

import './file-item.scss';

const toMb = (size) => `${size / 1000000}MB`;

/**
 * Single file item
 */
const FileItem = ({ file, removeLabel, uploadingLabel, uploadingFn, onRemove, ...rest }) => {
  const { name, size, type } = file;
  const [preview, setPreview] = useState();
  const [byteSent, setByteSent] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const isPreviewable = useMemo(() => ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'].includes(type), [type]);

  useEffect(() => {
    if (isPreviewable) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  }, [isPreviewable]);


  useEffect(() => {
    if (uploadingFn && !isUploading && byteSent <= 0) {
      const next = (data) => {
        setByteSent(data.byteSent);
        setIsUploading(data.loading);
      };

      uploadingFn(file, next);
    }
  }, [uploadingFn, isUploading, byteSent]);

  const onRemoveClick = useCallback((e) => {
    e.stopPropagation();
    onRemove(e);
  }, [onRemove, file.name, file.size]);

  return (
    <List.Item className="bi bi-file-item" icon={!isPreviewable ? (fileIcons[type] || 'file') : undefined} {...rest}>
      {isPreviewable && preview && <Avatar src={preview} />}
      <div className="bi-file-info">
        <Paragraph>{name}</Paragraph>
        <Paragraph tiny className="bi bi-file-size">{toMb(size)}</Paragraph>
        {isUploading && <ProgressBar completed={100 * (byteSent / file.size)} />}
      </div>
      <Button color="transparent" onClick={onRemoveClick} spinner={isUploading} disabled={isUploading}>
        {!isUploading ? removeLabel : uploadingLabel}
      </Button>
    </List.Item>
  );
};

FileItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  uploadingFn: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  removeLabel: PropTypes.string,
  uploadingLabel: PropTypes.string,
};

FileItem.defaultProps = {
  removeLabel: 'Remove',
  uploadingLabel: 'Uploading',
  uploadingFn: undefined,
};

export default React.memo(FileItem);
