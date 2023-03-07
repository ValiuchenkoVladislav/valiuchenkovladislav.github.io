import Router, { Route } from "preact-router";

import { HOME_PATH, Home } from "@pages/Home/Home";
import { NotFound } from "@pages/NotFound/NotFound";

import "./Main.scss";


export function Main(): JSX.Element {
  return (
    <main>
      <Router>
        <Route path={HOME_PATH} component={Home}/>

        <Route default component={NotFound}/>
      </Router>
    </main>
  );
}
