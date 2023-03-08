import { useState } from "preact/hooks";

import { NavLinks } from "../NavLinks/NavLinks";

import "./BurgerMenu.scss";


export function BurgerMenu(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        id="burger-button"
        aria-expanded={isExpanded}
        aria-label="Burger menu button"
      >
        <div className="burger-bar"/>
        <div className="burger-bar"/>
        <div className="burger-bar"/>
      </button>

      {isExpanded &&
        <menu id="navigation-menu">
          <NavLinks/>
        </menu>
      }
    </>
  );
}
