import { Signature } from "./Signature/Signature";
import { Navbar } from "./Navbar/Navbar";

import "./Header.scss";


export function Header(): JSX.Element {
  return (
    <header>
      <Signature/>

      <Navbar/>
    </header>
  );
}
