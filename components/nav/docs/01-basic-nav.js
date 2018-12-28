import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

/**
 * ## Basic Demo
 *
 * Creating navs can be easily achieved using the `Nav` component together with the `NavItem` component.
 */
export default function NavExample() {
  return (
    <Nav>
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
