import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectTrigger from './SelectTrigger';
import SelectDropDown from './SelectDropDown';
import FloatingContent from '../../Elements/FloatingContent';
import optionsAreGrouped from './utils/optionsAreGrouped';
import OptionsType from './utils/OptionsType';
import Value from './utils/ValueType';

import './select.scss';

/**
 * A Select component is a dropdown list that can be used to select between choices in a form.
 */
const Select = (props) => {
  const {
    options, value, placeholder, onChange, toggleOnChange, filtrable, filterInputPlaceholder, filterNoResultLabel,
    fluid, multiStyle, clearable, className, ...rest
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const hasOptionGroups = optionsAreGrouped(options);

  const classList = classNames('bi bi-select', {
    clearable,
    fluid,
    open: isOpen,
  }, className);

  // on change handler
  const onChangeHandler = (option) => {
    if (onChange && option.value !== value) onChange(option.value, options, value);
    if (toggleOnChange) setIsOpen(false);
  };
  // defines the trigger for the FloatingContent
  const Trigger = (
    <SelectTrigger
      options={options}
      hasOptionGroups={hasOptionGroups}
      value={value}
      placeholder={placeholder}
      multiStyle={multiStyle}
      className={classList}
      onClick={() => setIsOpen(true)}
      onClear={() => onChange(undefined, options, value)}
      clearable={clearable}
      {...rest}
    />
  );

  return (
    <FloatingContent
      trigger={Trigger}
      onToggle={() => setIsOpen(!isOpen)}
      isShown={isOpen}
      placement="bottom-center"
      widthAsTrigger
      offset={10}
    >
      <SelectDropDown
        options={options}
        hasOptionGroups={hasOptionGroups}
        onChange={onChangeHandler}
        value={value}
        filtrable={filtrable}
        filterInputPlaceholder={filterInputPlaceholder}
        filterNoResultLabel={filterNoResultLabel}
      />
    </FloatingContent>
  );
};

Select.propTypes = {
  /**
   * The select options. <br/>
   * Can be an array of object defined like the following: <br />
   * ```
   * const options = [
   *    { label: 'Option 1', value: 1 },
   *    { label: 'Option 2', value: 2 },
   *    { label: 'Option 3', value: 'option3', disabled: true },
   * ];
   * ```
   *
   * or an array of options group like: <br />
   * ```
   * const optionsGroup = [
   *  {
   *    name: 'Group 1',
   *    options: [
   *      { label: 'Option 1', value: 1 },
   *      { label: 'Option 2', value: 2 },
   *      { label: 'Option 3', value: 'option3', disabled: true },
   *    ],
   *  },
   *  {
   *    name: 'Group 2',
   *    options: [
   *      { label: 'Option 4', value: 4 },
   *      { label: 'Option 5', value: 5 },
   *      { label: 'Option 6', value: 6 },
   *    ],
   *  }
   * ];
   * ```
   */
  options: OptionsType.isRequired,
  /**
   * The value of the selected item, if not set will show the placeholder. <br/>
   * It can be the value of an option or an array of values in case is a multi selection Select.
   */
  value: Value,
  /**
   * The on change callback
   */
  onChange: PropTypes.func,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * The text to show when nothing is selected
   */
  placeholder: PropTypes.string,
  /**
   * Defines if the select should take all the possible width
   */
  fluid: PropTypes.bool,
  /**
   * Defines whether the onChange callback should be fired on option select
   */
  toggleOnChange: PropTypes.bool,
  /**
   * Defines whether the options list should be filtrable or not
   */
  filtrable: PropTypes.bool,
  /**
   * Defines the multiple selection style
   */
  multiStyle: PropTypes.oneOf(['strings', 'pills']),
  /**
   * Defines the filter input placeholder
   */
  filterInputPlaceholder: PropTypes.string,
  /**
   * Defines the message to show when no results are found
   */
  filterNoResultLabel: PropTypes.string,
  /**
   * Defines whether show the clearable icon or not
   */
  clearable: PropTypes.bool,
};

Select.defaultProps = {
  value: '',
  onChange: undefined,
  placeholder: 'Select...',
  helpText: undefined,
  fluid: false,
  toggleOnChange: true,
  filtrable: false,
  multiStyle: 'pills',
  filterInputPlaceholder: 'Filter options...',
  filterNoResultLabel: 'No options available',
  clearable: true,
};

export default React.memo(Select);
