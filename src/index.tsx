import { render } from "preact";

import "./index.css";


document.querySelector("[data-placeholder]")?.remove();

render(<p>Hello World!</p>, document.body);
