import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

import "./App.scss";


export function App(): JSX.Element {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
