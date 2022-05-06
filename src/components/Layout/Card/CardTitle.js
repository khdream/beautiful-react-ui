import React from 'react';
import classNames from 'classnames';
import Title from '../../Typography/Title';

/**
 * CardTitle component wraps the card's title.
 */
const CardTitle = ({ className, ...props }) => {
  const classList = classNames('card-title', className);
  return (<Title className={classList} tagName="h3" {...props} />);
};

CardTitle.propTypes = Title.propTypes;

CardTitle.defaultProps = {
  textAlign: undefined,
  color: 'default',
};

export default React.memo(CardTitle);
