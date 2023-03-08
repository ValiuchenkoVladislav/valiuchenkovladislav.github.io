import { useState } from "preact/hooks";

import { BurgerButton } from "./BurgerButton/BurgerButton";

import { NavLink, type NavLinkProps } from "../NavLink/NavLink";

import "./BurgerMenu.scss";


type BurgerMenuProps = Readonly<{
  links: NavLinkProps[];
}>;

export function BurgerMenu({ links }: BurgerMenuProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <BurgerButton {...{setIsExpanded, isExpanded}}/>

      {isExpanded &&
        <menu id="burger-menu">
          {links.map(linkProps =>
            <NavLink {...linkProps} onClick={() => setIsExpanded(false)}/>)}
        </menu>
      }
    </>
  );
}
