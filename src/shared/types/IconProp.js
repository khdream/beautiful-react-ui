import PropTypes from 'prop-types';
import Icon from '../../components/Elements/Icon';

/**
 * defines the shared type IconProp
 */
export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.instanceOf(Icon),
]);
