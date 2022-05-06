import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconProp } from '../../../shared';
import Icon from '../../Elements/Icon';
import Button from '../../Elements/Button';
import CardTitle from './CardTitle';
import CardContent from './CardContent';
import CardImage from './CardImage';
import CardFooter from './CardFooter';
import Spinner from '../../Elements/Spinner';
import takeCardImageOutOfChildren from './utils/takeCardImageOutOfChildren';
import getPossibleImageWrapper from './utils/getPossibleImageWrapper';

import './card.scss';

/**
 * The Card component displays its content in a manner similar to a playing card.
 * It could possibly be composed by `Card.Title`, `Card.Content`, `Card.Image` and eventually `Card.Footer`.
 * The `Card.Image` component will be shown at the top of the card, if the card is vertically aligned.
 * Or on the left if it's horizontally aligned.
 * To change this behavior, you can possibly use `reversed` prop.
 *
 * Warning: the `Card.Image` component will never be shown in the middle of the card.
 *
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Card = React.memo((props) => {
  const {
    children, textAlign, fluid, orientation, actionButton, actionButtonIcon, onActionButtonClick, reversed, loading,
    float, actionButtonRenderer, imageRenderer, className, ...rest
  } = props;

  const [cardImage, childrenWithoutImg] = takeCardImageOutOfChildren(children);
  const [PossibleImageWrapper, possibleImageWrapperProps] = getPossibleImageWrapper(reversed, orientation);

  const classList = classNames('bi bi-card', {
    [`card-text-${textAlign}`]: !!textAlign,
    'bi-card-loading': loading,
    'orientation-h': orientation === 'horizontal',
    fluid: !!fluid,
    reversed,
    float,
  }, className);

  return (
    <div className={classList} {...rest}>
      {(cardImage || actionButton || imageRenderer) && (
        <PossibleImageWrapper {...possibleImageWrapperProps}>
          {actionButton && (
            <div className={classNames({ 'bi-card-actbtn-icn': !!actionButton, 'no-img': !cardImage })}>
              { /* the actionButtonRenderer overrides the standard action button behaviour */}
              {actionButton && actionButtonRenderer && actionButtonRenderer()}
              {actionButton && !actionButtonRenderer && (
                <Button
                  color="transparent"
                  icon={<Icon name={actionButtonIcon} />}
                  onClick={onActionButtonClick}
                  className="btn-dots"
                  rounded
                />
              )}
            </div>
          )}
          {cardImage && !imageRenderer && (cardImage)}
          {imageRenderer && imageRenderer()}
        </PossibleImageWrapper>
      )}
      <div className="card-content-wrapper">{childrenWithoutImg}</div>
      {loading && <div className="card-overlapping-loader"><Spinner color="primary" /></div>}
    </div>
  );
});

Card.propTypes = {
  /**
   * Allows to align card text content
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
  /**
   * Defines if the card should adapt its width to its container or not
   */
  fluid: PropTypes.bool,
  /**
   * Defines the card orientation
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Shows an overlapping opaque layer with a Spinner in the middle
   */
  loading: PropTypes.bool,
  /**
   * If true, it shows an actionButton that will run a callback
   */
  actionButton: PropTypes.bool,
  /**
   * Allows to change actionButton's icon
   */
  actionButtonIcon: IconProp,
  /**
   * The callback to be performed on action button click
   */
  onActionButtonClick: PropTypes.func,
  /**
   * Defines weather the card should reverse its column or not
   */
  reversed: PropTypes.bool,
  /**
   * Defines weather the card should float on mouse hover or not
   */
  float: PropTypes.bool,
  /**
   * Allows to change the standard action button behaviour by defining a custom renderer
   */
  actionButtonRenderer: PropTypes.func,
  /**
   * Allows to change the standard card's image behaviour by defining a custom renderer
   */
  imageRenderer: PropTypes.func,
};

Card.defaultProps = {
  textAlign: undefined,
  fluid: false,
  loading: false,
  orientation: 'vertical',
  actionButton: false,
  actionButtonIcon: 'ellipsis-v',
  onActionButtonClick: undefined,
  reversed: false,
  float: false,
  actionButtonRenderer: undefined,
  imageRenderer: undefined,
};

// shortcuts
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Footer = CardFooter;

export default Card;
