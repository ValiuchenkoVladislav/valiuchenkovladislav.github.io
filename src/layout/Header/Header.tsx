import { Signature } from "./Signature/Signature";

import "./Header.scss";


export function Header(): JSX.Element {
  return (
    <header>
      <Signature/>
    </header>
  );
}
