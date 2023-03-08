import { useRouter } from "preact-router";

import { HOME_PATH } from "@pages/Home/Home";

import "./NavLinks.scss";


type NavLinkProps = Readonly<{
  href: string;
  children: JSX.Element | string;
}>;

function NavLink({ href, children }: NavLinkProps): JSX.Element {
  const { url } = useRouter()[0];

  return (
    <a
      href={href}
      aria-current={url === href && "page"}
      class="nav-link"
    >
      {children}
    </a>
  );
}

export function NavLinks(): JSX.Element {
  return (
    <>
      <NavLink href={HOME_PATH}>Home</NavLink>
      <NavLink href="/test-page">Test</NavLink>
    </>
  );
}