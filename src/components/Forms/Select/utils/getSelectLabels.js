import React from 'react';
import Pill from '../../../Elements/Pill';

/**
 * Takes an array of items (or a single item) and returns the label/React node to be shown.
 * @param items
 * @param multiStyle
 * @returns {*}
 */
const getSelectedLabels = (items, multiStyle) => {
  if (Array.isArray(items)) {
    if (multiStyle === 'pills') {
      return items.map(({ label }) => (<Pill key={label}>{label}</Pill>));
    }

    return items.map(({ label }) => label).join(', ');
  }

  return items.label;
};

export default getSelectedLabels;
