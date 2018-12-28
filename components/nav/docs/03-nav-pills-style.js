import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

/**
 * ## Pills Style
 *
 * Using the `pills` prop you can style the navs to look like pills.
 */
export default function NavPillsExample() {
  return (
    <Nav pills>
      <NavItem>
        <NavLink active href="#">
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Another Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
}
