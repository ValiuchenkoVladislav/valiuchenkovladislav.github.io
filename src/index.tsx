import { render } from "preact";

import { removePlaceholder } from "@utils/removePlaceholder";

import { App } from "./layout/App";


removePlaceholder();

render(<App/>, document.getElementById("app") as HTMLDivElement);
