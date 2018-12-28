import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

/**
 * ## Tabs Style
 *
 * Using the `tabs` prop, you can style the navs to look like tabs.
 */
export default function NavTabsExample() {
  return (
    <Nav tabs>
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
