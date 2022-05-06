import PropTypes from 'prop-types';
import Pill from '../../components/Elements/Pill';

/**
 * defines the shared type PillProp
 */
export default PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.instanceOf(Pill),
]);
