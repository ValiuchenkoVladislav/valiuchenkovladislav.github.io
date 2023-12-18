import { StaticUIBar } from "~/components/StaticUIBar";
import { ScopeCorner } from "~/components/ScopeCorner";

import { ReactComponent as GitHubLogo } from "~/assets/images/githubLogo.svg";


export function Footer() {
  return (
    <StaticUIBar element="footer" className="bottom-0 items-end">
      <a
        href="https://github.com/ValiuchenkoVladislav" target="_blank" rel="noreferrer"
        className={`
          flex gap-[1.2rem] items-center
          duration-700 opacity-75 hover:opacity-100
        `}
      >
        <GitHubLogo className="w-[3rem] aspect-square"/>

        <span className="text-[1.4rem] max-[352px]:hidden">
          @VALIUCHENKOVLADISLAV
        </span>
      </a>

      <ScopeCorner position="bottom-right"/>
    </StaticUIBar>
  );
}
