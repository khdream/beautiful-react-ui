import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './image.scss';

/**
 * A lightweight image wrapper to show responsive images in style.
 */
const Image = ({ src, alt, thumb, rounded, className, ...props }) => {
  const classList = classNames('bi bi-image', {
    'bi-img-thumb': thumb,
    'bi-img-rounded': rounded,
  }, className);

  return (<img src={src} alt={alt} className={classList} {...props} />);
};

Image.propTypes = {
  /**
   * The image source
   */
  src: PropTypes.string.isRequired,
  /**
   * The image alternative text
   */
  alt: PropTypes.string.isRequired,
  /**
   * Applies the thumbnail style to the image
   */
  thumb: PropTypes.bool,
  /**
   * Applies a fully rounded style to the image
   */
  rounded: PropTypes.bool,
};

Image.defaultProps = {
  thumb: false,
  rounded: false,
};

export default React.memo(Image);
