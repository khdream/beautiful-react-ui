import PropTypes from 'prop-types';
import OptionType from './OptionType';
import OptionsGroupType from './OptionsGroupType';

/**
 * Defines the Select component 'options' prop type
 */
export default PropTypes.oneOfType([
  PropTypes.arrayOf(OptionType),
  PropTypes.arrayOf(OptionsGroupType),
]);
