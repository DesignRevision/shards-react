export const TIMEOUT = {
  FADE: 150,
  COLLAPSE: 350,
  SHOW: 0,
  HIDE: 0
};

export const EVENTS = {
  CLICK: ["click", "touchstart", "keyup"],
  MOUSE: ["mouseenter", "mouseleave"],
  FOCUS: ["focusin", "focusout"]
};

export const KEYCODES = {
  ESC: 27,
  SPACE: 32,
  ENTER: 13,
  TAB: 9,
  UP: 38,
  DOWN: 40
};

export const TRANSITION_KEYS = [
  "in",
  "mountOnEnter",
  "unmountOnExit",
  "appear",
  "enter",
  "exit",
  "timeout",
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited"
];

export const TRANSITION_STATUS = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};

export const TRANSITION_CLASS_MAP = {
  [TRANSITION_STATUS.ENTERING]: "collapsing",
  [TRANSITION_STATUS.ENTERED]: "collapse show",
  [TRANSITION_STATUS.EXITING]: "collapsing",
  [TRANSITION_STATUS.EXITED]: "collapse"
};

export const POPPER_PLACEMENTS = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start",
  "auto-start",
  "auto",
  "auto-end"
];

export const DROPDOWN_POSITION_MAP = {
  UP: "top",
  LEFT: "left",
  RIGHT: "right",
  DOWN: "bottom"
};

export const BREAKPOINTS = ["xs", "sm", "md", "lg", "xl"];

/**
 * FORMS
 */

export const INPUT_TYPES = [
  "text",
  "password",
  "email",
  "number",
  "tel",
  "url",
  "search",
  "range",
  "color",
  "date",
  "time",
  "datetime",
  "datetime-local",
  "month",
  "week",
  "file"
];

export const INPUT_GROUP_ADDON_TYPES = ["prepend", "append"];
