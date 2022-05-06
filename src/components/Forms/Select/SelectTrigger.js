import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectLabel from './SelectLabel';
import Caret from '../../Elements/_Caret';
import CloseIcon from '../../Elements/_CloseIcon';
import OptionsType from './utils/OptionsType';
import HelpText from '../_HelpText';
import ValueType from './utils/ValueType';

/**
 * Shows the select element
 */
const SelectTrigger = (props) => {
  const {
    value, options, placeholder, clearable, onClear, helpText, hasOptionGroups, multiStyle, className, ...rest
  } = props;

  const onClearHandler = (event) => {
    if (onClear) {
      event.preventDefault();
      event.stopPropagation();
      onClear();
    }
  };
  const classList = classNames('bi-select-element', {
    'select-multi': Array.isArray(value) && value.length >= 1,
  });


  return (
    <>
      <div className={className} {...rest}>
        <div className={classList} role="button" tabIndex={0}>
          <SelectLabel
            value={value}
            options={options}
            placeholder={placeholder}
            hasOptionGroups={hasOptionGroups}
            multiStyle={multiStyle}
          />
          {clearable && value && value.length > 0 && (
            <span
              className="sel-clear-x"
              onClick={onClearHandler}
              onKeyDown={onClearHandler}
              role="button"
              tabIndex={0}
            >
              <CloseIcon />
            </span>
          )}
          <Caret />
        </div>
      </div>
      {helpText && <HelpText text={helpText} />}
    </>
  );
};

SelectTrigger.propTypes = {
  options: OptionsType.isRequired,
  value: ValueType,
  hasOptionGroups: PropTypes.bool,
  placeholder: PropTypes.string,
  multiStyle: PropTypes.oneOf(['strings', 'pills']),
  helpText: PropTypes.string,
  clearable: PropTypes.bool,
  onClear: PropTypes.func,
};

SelectTrigger.defaultProps = {
  value: undefined,
  placeholder: undefined,
  hasOptionGroups: false,
  helpText: undefined,
  multiStyle: 'pills',
  clearable: true,
  onClear: undefined,
};

export default React.memo(SelectTrigger);
