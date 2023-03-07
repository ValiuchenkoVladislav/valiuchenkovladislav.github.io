import { RepoLink } from "./RepoLink/RepoLink";
import { Comment } from "./Comment/Comment";

import "./Footer.scss";


export function Footer(): JSX.Element {
  return (
    <footer>
      <RepoLink/>

      <Comment/>
    </footer>
  );
}
