import { StaticUIBar } from "~/components/StaticUIBar";


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
        aa
        <span className="text-[1.4rem] max-[352px]:hidden">
          @VALIUCHENKOVLADISLAV
        </span>
      </a>
    </StaticUIBar>
  );
}
