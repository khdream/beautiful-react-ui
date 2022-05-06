import PropTypes from 'prop-types';
import OptionType from './OptionType';

/**
 * Defines an options group
 */
export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(OptionType).isRequired,
});
