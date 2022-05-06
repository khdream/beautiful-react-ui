import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import Paragraph from '../../Typography/Paragraph';
import { makePillFromProp, PillProp, Size, warn } from '../../../shared';

import './avatar.scss';

/**
 * The Avatar component is meant to give visual information about a user picture picture or her/his name initials as
 * replacement.<br />
 * Additionally it can show the user display name or further information, if provided.
 */
const Avatar = (props) => {
  const {
    src, alt, shape, initials, size, state, pill, displayName, furtherInfo, ImageRender, TextRender, ElementRender,
    className, ...rest
  } = props;

  if (!initials && !src) {
    warn('Avatar component cannot render since \'src\' nor \'initials\' prop has been provided');
    return null;
  }

  const classList = useMemo(() => classNames('bi bi-avatar', {
    'avt-sm': size === 'small',
    'avt-lg': size === 'large',
    'avt-rounded': shape === 'rounded',
    'avt-square': shape === 'square',
    'avt-initials': initials,
  }, className), [size, shape, initials]);

  return (
    <>
      <ElementRender className={classList} {...rest}>
        <div className="bi-avatar-item">
          {src && (<ImageRender src={src} alt={alt} rounded={shape === 'rounded'} />)}
          {initials && (<span className="initials">{initials.slice(0, 2)}</span>)}
        </div>
        {pill && makePillFromProp(pill)}
        {state && <span className={`avt-state state-${state}`} />}
      </ElementRender>
      {(displayName || furtherInfo) && (
        <div className="bi-avatar-info">
          {displayName && (
            <TextRender className="avtr-disp-name">
              {displayName}
            </TextRender>
          )}
          {furtherInfo && (
            <TextRender className="avtr-furth-info">{furtherInfo}</TextRender>
          )}
        </div>
      )}
    </>
  );
};

Avatar.propTypes = {
  /**
   * Defines the avatar size
   */
  size: Size,
  /**
   * Defines the avatar shape
   */
  shape: PropTypes.oneOf(['rounded', 'square']),
  /**
   * The avatar image source
   */
  src: PropTypes.string,
  /**
   * Shows the user's initials rather than her/his face
   */
  initials: PropTypes.string,
  /**
   * The avatar image alternative text
   */
  alt: PropTypes.string,
  /**
   * Shows a pill right under the image
   */
  pill: PillProp,
  /**
   * Defines the avatar shape
   */
  state: PropTypes.oneOf(['offline', 'online', 'danger']),
  /**
   * Defines the user display name
   */
  displayName: PropTypes.string,
  /**
   * Defines some further user's information
   */
  furtherInfo: PropTypes.string,
  /**
   * A render function to be used as the image component instead of the default one
   */
  ImageRender: PropTypes.elementType,
  /**
   * A render function to be used as the text component instead of the default one
   */
  TextRender: PropTypes.elementType,
  /**
   * A render function to be used as the wrapper element component instead of the default one
   */
  ElementRender: PropTypes.elementType,
};

Avatar.defaultProps = {
  size: 'default',
  shape: 'rounded',
  src: undefined,
  initials: undefined,
  alt: 'Avatar image',
  pill: undefined,
  state: undefined,
  displayName: '',
  furtherInfo: '',
  ImageRender: Image,
  TextRender: Paragraph,
  ElementRender: 'div',
};

export default React.memo(Avatar);
