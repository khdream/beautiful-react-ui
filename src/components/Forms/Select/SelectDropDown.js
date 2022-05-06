import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Input from '../Input';
import SelectOption from './SelectOption';
import SelectOptionGroup from './SelectOptionGroup';
import filterOptions from './utils/filterOptions';
import isSelected from './utils/optionIsSelected';
import OptionsType from './utils/OptionsType';
import ValueType from './utils/ValueType';

/**
 * Shows the select drop-down menu
 */
const SelectDropDown = (props) => {
  const {
    options, value, filtrable, filterInputPlaceholder: placeholder, filterNoResultLabel, hasOptionGroups, onChange,
  } = props;
  const [filter, setFilter] = useState('');
  const filteredOptions = useMemo(() => (
    filtrable ? filterOptions(options, filter, hasOptionGroups) : options
  ), [filter, options, hasOptionGroups]);

  const classList = classNames('bi-select-options-dropdown', {
    filtrable,
    'grouped-opts': hasOptionGroups,
  });

  return (
    <div className={classList}>
      {filtrable && (
        <Input value={filter} onChange={(event, nextFilter) => setFilter(nextFilter)} placeholder={placeholder} />
      )}
      {filteredOptions.map((option) => (
        hasOptionGroups
          ? <SelectOptionGroup group={option} onClick={onChange} value={value} key={option.name} />
          : <SelectOption option={option} selected={isSelected(option, value)} onClick={onChange} key={option.value} />
      ))}
      {filtrable && filteredOptions.length === 0 && (
        <p className="no-results">{filterNoResultLabel}</p>
      )}
    </div>
  );
};

SelectDropDown.propTypes = {
  options: OptionsType.isRequired,
  hasOptionGroups: PropTypes.bool,
  value: ValueType,
  onChange: PropTypes.func,
  filtrable: PropTypes.bool.isRequired,
  filterInputPlaceholder: PropTypes.string.isRequired,
  filterNoResultLabel: PropTypes.string.isRequired,
};

SelectDropDown.defaultProps = {
  hasOptionGroups: false,
  value: undefined,
  onChange: undefined,
};

export default React.memo(SelectDropDown);
