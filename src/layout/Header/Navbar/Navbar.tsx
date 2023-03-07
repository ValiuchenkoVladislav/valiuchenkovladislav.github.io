import { NavLink } from "./NavLink/NavLink";

import { HOME_PATH } from "@pages/Home/Home";

import "./Navbar.scss";


export function Navbar(): JSX.Element {
  return (
    <nav>
      <NavLink href={HOME_PATH}>Home</NavLink>
      <NavLink href="/test-page">Test</NavLink>
    </nav>
  );
}
