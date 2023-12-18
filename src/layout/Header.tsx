import { StaticUIBar } from "~/components/StaticUIBar";
import { ScopeCorner } from "~/components/ScopeCorner";


export function Header() {
  return (
    <StaticUIBar element="header" className="items-start top-0">
      <ScopeCorner position="top-left"/>

      <nav className="flex gap-[max(1.6vw,16px)] font-extrabold text-[2rem] leading-none">
        <a href="">link1</a>
        <a href="">link2</a>
        <a href="">link3</a>
      </nav>
    </StaticUIBar>
  );
}
