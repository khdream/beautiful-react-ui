import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './placeholder.scss';

/**
 * A placeholder component is used in place of a content that will soon appear into the layout.
 */
const Placeholder = ({ paragraphs, image, title, className, ...rest }) => {
  const classList = classNames('bi bi-placeholder', {
    'img-placeholder': !!image,
    'img-rounded': image === 'rounded',
  }, className);

  return (
    <div className={classList} {...rest}>
      {image && (<span className="bi-placeholder-img" />)}
      <div className="bi-placeholder-parag-wrapper">
        {title && <span className="bi-placeholder-title" />}
        {Array.from({ length: paragraphs }).map((und, index) => (
          // As this is the only way to assign a key to the generated
          // span component the following ESLint rule has been disabled.
          // eslint-disable-next-line react/no-array-index-key
          <span key={`par-${index}`} className="bi-placeholder-paragraph" />
        ))}
      </div>
    </div>
  );
};

Placeholder.propTypes = {
  /**
   * Defines the number of paragraphs to shown
   */
  paragraphs: PropTypes.number,
  /**
   * Defines if the component should hold place for a title
   */
  title: PropTypes.bool,
  /**
   * Defines if the component should hold place for an image
   */
  image: PropTypes.oneOf([true, false, 'rounded', 'square']),
};

Placeholder.defaultProps = {
  paragraphs: 1,
  title: false,
  image: false,
};

export default React.memo(Placeholder);
