import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Color } from '../../../shared';

import './paragraph.scss';

/**
 * beautiful-react-ui does not force the developer to use its own styles nor creates extra global rules that can
 * possibly collide with the application's ones.<br/>
 * For this reason, in order to have the consistent style between the UI components and the texts, few typography
 * specialised components has been created.<br/>
 * The typography specialised components are used within the library itself.
 * <br/>
 * Here's the Paragraph component.
 */
const Paragraph = (props) => {
  const { children, color, fontFamily, textAlign, wordBreak, tiny, light, className, ElementRender, ...rest } = props;
  const classList = useMemo(() => classNames('bi bi-p', `bi-p-${color}`, `bi-ff-${fontFamily}`, {
    [`bi-p-${textAlign}`]: !!textAlign,
    [`bi-p-break-${wordBreak}`]: !!wordBreak,
    'bi-p-tiny': tiny,
    'bi-p-light': light,
  }, className), [color, fontFamily, textAlign, wordBreak, tiny, light]);

  return (<ElementRender className={classList} {...rest}>{children}</ElementRender>);
};

Paragraph.propTypes = {
  /*
   * Defines the paragraph color, can be one of the following:
   * `default`, `primary`, `secondary`, `info`, `warning`, `success`, `danger`.
   */
  color: Color,
  /*
   * Defines the paragraph font-family, can be one of the following:
   * `sans`, `serif`, `mono`.
   */
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  /**
   * Defines the paragraph text align
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines the paragraph breaks
   */
  wordBreak: PropTypes.oneOf(['normal', 'words', 'all', 'truncate']),
  /**
   * Makes the text even smaller
   */
  tiny: PropTypes.bool,
  /**
   * Makes the text color lighter
   */
  light: PropTypes.bool,
  /**
   * A renderer to replace the paragraph element
   */
  ElementRender: PropTypes.elementType,
};


Paragraph.defaultProps = {
  color: 'default',
  fontFamily: 'sans',
  textAlign: undefined,
  wordBreak: 'normal',
  tiny: false,
  light: false,
  ElementRender: 'p',
};

export default React.memo(Paragraph);
