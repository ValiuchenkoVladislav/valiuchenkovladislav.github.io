import githubLogo from "@assets/images/github.webp";

import "./RepoLink.scss";


export function RepoLink(): JSX.Element {
  return (
    <a
      href="https://github.com/ValiuchenkoVladislav/portfolio-website"
      target="_blank"
      rel="noreferrer"
      id="project-repo"
    >
      <img src={githubLogo} alt="Project Repo"/>
    </a>
  );
}
