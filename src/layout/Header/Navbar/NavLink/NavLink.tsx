import { type ComponentProps } from "preact";

import { useRouter } from "preact-router";

import "./NavLink.scss";


export type NavLinkProps = Readonly<{
  href: string;
  children: JSX.Element | string;
} & ComponentProps<"a">>;

export function NavLink({ href, children, ...attributes }: NavLinkProps): JSX.Element {
  const { url } = useRouter()[0];

  return (
    <a
      href={href}
      aria-current={url === href && "page"}
      class="nav-link"
      {...attributes}
    >
      {children}
    </a>
  );
}
