import PropTypes from "prop-types";
import isFunction from "lodash.isfunction";

export const reflow = node => {
  void node.offsetHeight;
};

export const getNodeHeight = node => {
  return node.scrollHeight;
};

export const isBrowser = !!(typeof window !== "undefined" && window.document);

export const isRef = target => {
  if (target && typeof target === "object") {
    return "current" in target;
  }

  return false;
};

export const getDOMElements = target => {
  if (isFunction(target)) {
    return target();
  }

  if (isRef(target)) {
    return target.current;
  }

  if (!isBrowser && typeof target !== "string") {
    return target;
  }

  const results = document.querySelectorAll(target);

  if (!results.length) {
    throw new Error(`No DOM elements were found for ${target}.`);
  }

  return results;
};

export const getTarget = target => {
  const results = getDOMElements(target);

  return results.length ? results[0] : results;
};

export const CustomPropTypes = {
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
    PropTypes.shape({ current: PropTypes.any })
  ]),
  column: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      size: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string
      ]),
      order: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ])
};
