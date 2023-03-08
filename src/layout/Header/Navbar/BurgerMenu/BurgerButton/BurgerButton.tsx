import { StateUpdater } from "preact/hooks";

import "./BurgerButton.scss";


type BurgerButtonProps = Readonly<{
  setIsExpanded: StateUpdater<boolean>;
  isExpanded: boolean
}>;

export function BurgerButton({ setIsExpanded, isExpanded }: BurgerButtonProps): JSX.Element {
  return (
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
  );
}
