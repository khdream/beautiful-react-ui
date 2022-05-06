import React from 'react';
import PropTypes from 'prop-types';
import OptionsType from './utils/OptionsType';
import ValueType from './utils/ValueType';
import findSelectedOptions from './utils/findSelectedOptions';
import findSelectedInGroups from './utils/findSelectedInGroups';
import getSelectLabel from './utils/getSelectLabels';


/**
 * Shows the Select label according to its options and value or, if no value is available or no option is found,
 * shows a placeholder
 */
const SelectLabel = ({ options, value, hasOptionGroups, multiStyle, placeholder }) => {
  const selectedItems = !hasOptionGroups ? findSelectedOptions(options, value) : findSelectedInGroups(options, value);
  const shouldShowPlaceholder = Array.isArray(selectedItems) ? selectedItems.length === 0 : !selectedItems;

  return (
    <span className={shouldShowPlaceholder ? 'bi-select-placeholder' : undefined}>
      {shouldShowPlaceholder ? placeholder : getSelectLabel(selectedItems, multiStyle)}
    </span>
  );
};

SelectLabel.propTypes = {
  options: OptionsType.isRequired,
  hasOptionGroups: PropTypes.bool,
  value: ValueType,
  multiStyle: PropTypes.oneOf(['strings', 'pills']),
  placeholder: PropTypes.string,
};

SelectLabel.defaultProps = {
  value: undefined,
  hasOptionGroups: false,
  multiStyle: 'pills',
  placeholder: undefined,
};

export default React.memo(SelectLabel);
