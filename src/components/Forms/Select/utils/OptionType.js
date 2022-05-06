import PropTypes from 'prop-types';

/**
 * Defines the single option item type
 */
export default PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
});
