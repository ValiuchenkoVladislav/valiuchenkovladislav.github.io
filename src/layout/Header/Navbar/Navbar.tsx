import { useState, useEffect } from "preact/hooks";

import { NavLinks } from "./NavLinks/NavLinks";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

import "./Navbar.scss";


export function Navbar(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => { // in case if user resizes screen dynamically
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <nav>
      {screenWidth > 780 ? <NavLinks/> : <BurgerMenu/>}
    </nav>
  );
}
