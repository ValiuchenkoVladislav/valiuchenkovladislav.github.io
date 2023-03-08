import { useState, useEffect } from "preact/hooks";

import "./Signature.scss";


export function Signature(): JSX.Element {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => { // in case if user resizes screen dynamically
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  return (
    <h1 id="signature">
      {screenWidth > 780 ? "Valiuchenko Vladislav's Portfolio" : "V. V."}
    </h1>
  );
}
