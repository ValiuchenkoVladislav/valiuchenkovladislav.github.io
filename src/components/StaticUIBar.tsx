import { type ComponentChildren, type JSX, createElement } from "preact";


export type StaticUIBarProps = Readonly<{
  element: keyof JSX.IntrinsicElements;
  children: ComponentChildren;
  className?: string;
}>;

export function StaticUIBar({ element, className, children }: StaticUIBarProps) {
  return createElement(
    element,
    {
      className: `
        z-10 absolute
        flex justify-between
        px-[max(3.6vw,16px)] py-[max(1.8vw,16px)]
        w-screen
        ${className}
      `
    },
    children
  );
}
