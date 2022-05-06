import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * CardContent component wraps the card's content.
 */
const CardContent = ({ children, textAlign, className }) => {
  const classList = classNames('card-content', {
    [`text-align-${textAlign}`]: !!textAlign,
  }, className);

  return (
    <section className={classList}>{children}</section>
  );
};


CardContent.propTypes = {
  /**
   * Defines how the content should be aligned
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

CardContent.defaultProps = {
  textAlign: undefined,
};


export default React.memo(CardContent);
