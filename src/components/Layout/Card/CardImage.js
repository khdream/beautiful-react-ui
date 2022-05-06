import React from 'react';
import Image from '../../Elements/Image';

/**
 * The CardImage component wraps the possibly card's image
 */

const CardImage = (props) => (
  <div className="card-img">
    <Image {...props} />
  </div>
);

CardImage.propTypes = Image.propTypes;

export default React.memo(CardImage);
