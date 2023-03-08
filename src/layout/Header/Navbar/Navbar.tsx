import { useState, useEffect } from "preact/hooks";

import { HOME_PATH } from "@pages/Home/Home";

import { NavLink, type NavLinkProps } from "./NavLink/NavLink";

import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

import "./Navbar.scss";


const NAV_LINKS: NavLinkProps[] = [
  { href: HOME_PATH, children: "Home" },
  { href: "/test-page", children: "Test" }
];

export function Navbar(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => { // in case if user resizes screen dynamically
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <nav id="navbar">
      {screenWidth > 780
        ? NAV_LINKS.map(linkProps => <NavLink {...linkProps}/>)
        : <BurgerMenu links={NAV_LINKS}/>
      }
    </nav>
  );
}
