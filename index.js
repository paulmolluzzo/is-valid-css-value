const cssProps = require('css-properties-values');

const isValidProperty = prop => cssProps.filter(cssProp => cssProp.property === prop).length > 0;
const isValidPropertyValue = (prop, val) => {
  const propertyValues = cssProps.filter(cssProp => cssProp.property === prop)[0].values;
  return isValidProperty(prop) && propertyValues.filter(value => value === val).length > 0;
};

module.exports.isValidProperty = isValidProperty;
module.exports.isValidPropertyValue = isValidPropertyValue;
