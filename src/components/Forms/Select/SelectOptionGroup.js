import React from 'react';
import PropTypes from 'prop-types';
import isSelected from './utils/optionIsSelected';
import OptionsGroupType from './utils/OptionsGroupType';
import SelectOption from './SelectOption';
import ValueType from './utils/ValueType';


/**
 * Group of options
 */
const SelectOptionGroup = ({ group, value, onClick }) => (
  <div className="select-group">
    <div className="group-title">{group.name}</div>
    {group.options.map((option) => (
      <SelectOption option={option} selected={isSelected(option, value)} onClick={onClick} key={option.value} />
    ))}
  </div>
);

SelectOptionGroup.propTypes = {
  group: OptionsGroupType.isRequired,
  value: ValueType.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(SelectOptionGroup);
