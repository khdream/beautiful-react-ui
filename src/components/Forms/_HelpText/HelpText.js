import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paragraph from '../../Typography/Paragraph';
import { Color } from '../../../shared';

import './help-text.scss';

/**
 * The HelpText component is used within this very same library to render input related help texts
 */
const HelpText = ({ text, className, ...rest }) => (
  <Paragraph className={classNames('bi-helptext', className)} {...rest}>{text}</Paragraph>
);

HelpText.propTypes = {
  /**
   * The text to show
   */
  text: PropTypes.string.isRequired,
  /**
   * The text of the color
   */
  color: Color,
};

HelpText.defaultProps = {
  color: 'default',
};

export default React.memo(HelpText);
