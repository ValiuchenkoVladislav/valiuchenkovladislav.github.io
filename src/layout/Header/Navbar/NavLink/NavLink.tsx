import { useRouter } from "preact-router";

import "./NavLink.scss";


export type NavLinkProps = Readonly<{
  href: string;
  children: JSX.Element | string;
}>;

export function NavLink({ href, children }: NavLinkProps): JSX.Element {
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
