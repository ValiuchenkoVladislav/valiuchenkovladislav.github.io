import { render } from "preact";

import { App } from "~/layout/App";

import "./index.css";


document.querySelector("[data-placeholder]")?.remove();

render(<App/>, document.body);
