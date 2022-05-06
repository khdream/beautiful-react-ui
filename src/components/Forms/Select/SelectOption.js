import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OptionType from './utils/OptionType';

/**
 * The single Select option component
 */
const SelectOption = ({ option, onClick, selected }) => {
  const classList = classNames('bi-select-opt', {
    selected,
    disabled: option.disabled,
  });

  const clickHandler = () => {
    if (!option.disabled && onClick) {
      onClick(option);
    }
  };

  return (
    <div className={classList} onClick={clickHandler} onKeyDown={clickHandler} role="button" tabIndex={0}>
      {option.label}
    </div>
  );
};

SelectOption.propTypes = {
  option: OptionType.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

SelectOption.defaultProps = {
  selected: false,
};

export default React.memo(SelectOption);
