import warn from './warn';

// check React.memo wrapped el
const getComponentType = (ReactEl) => {
  if (ReactEl.type) return getComponentType(ReactEl.type);

  return ReactEl;
};

/* eslint-disable max-len */
const checkOnAllowedChildren = (ChildElement, allowedTypes, componentName) => {
  if (process.env.NODE_ENV === 'development' && allowedTypes.length > 0 && !allowedTypes.map(getComponentType).includes(getComponentType(ChildElement))) {
    warn(
      `${componentName} should be receiving children of ${componentName}.* domain only, if you're abstracting your own component(s) on it then it's perfectly fine, just ignore this warning.\n`
      + `Otherwise, be aware that using other kind of components as ${componentName} children may quite lead to bugs or layout glitches.\n'This warning will disappear in production mode.`,
    );
  }
};
/* eslint-enable max-len */

export default checkOnAllowedChildren;
