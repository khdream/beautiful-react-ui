import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Color } from '../../../shared';

import './title.scss';

/**
 * beautiful-react-ui does not force the developer to use its own styles nor creates extra global rules that can
 * possibly collide with the application's ones.<br/>
 * For this reason, in order to have the consistent style between the UI components and the texts, few typography
 * specialised components has been created.<br/>
 * The typography specialised components are used within the library itself.
 * <br/>
 * Here's the Title component.
 */
const Title = (props) => {
  const { children, color, size, tagName, textAlign, wordBreak, className, ...rest } = props;
  const TitleTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName) ? tagName : 'h1';
  const classList = classNames('bi bi-title', `bi-title-${color}`, {
    'title-base': size === 'base',
    'title-lg': size === 'lg',
    'title-xl': size === 'xl',
    'title-2xl': size === '2xl',
    'title-3xl': size === '3xl',
    'title-4xl': size === '4xl',
    [`bi-title-${textAlign}`]: !!textAlign,
    [`bi-title-break-${wordBreak}`]: !!wordBreak,
  }, className);

  return (
    <TitleTag className={classList} {...rest}>
      {children}
    </TitleTag>
  );
};

Title.propTypes = {
  /*
   * Defines the title color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /*
   * Defines the title size, can be one of the following:
   * `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl`.
   */
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '3xl', '4xl']),
  /**
   * Defines which tag should be used to render the title
   */
  tagName: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Defines the title text align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines the title breaks
   */
  wordBreak: PropTypes.oneOf(['normal', 'words', 'all', 'truncate']),
};

Title.defaultProps = {
  color: 'default',
  tagName: 'h1',
  size: undefined,
  textAlign: undefined,
  wordBreak: 'normal',
};

export default React.memo(Title);
