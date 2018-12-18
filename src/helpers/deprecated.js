/**
 * Wraps a PropTypes.[type] with a console deprecation warning call.
 *
 * @param {Function} propType    PropType type
 * @param {String}   replacement Replacement property
 *
 * @returns {Function} PropType
 */
export default function deprecated(propType, replacement) {
  const warned = [];

  return (props, propName, componentName, ...rest) => {
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated and will be`
        + ` removed in the future releases. Please use the "${replacement}" instead.`;
      if (!warned[message]) {
        console.warn(message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}
