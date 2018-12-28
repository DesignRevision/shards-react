import React from "react";

export const DropdownContext = React.createContext({
  toggle: function() {},
  open: false,
  direction: "down",
  nav: false
});
