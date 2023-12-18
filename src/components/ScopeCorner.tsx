export type ScopeCornerProps = Readonly<{
  position: `${"top" | "bottom"}-${"right" | "left"}`;
}>;

export function ScopeCorner({ position }: ScopeCornerProps) {
  const borderSides = position.split("-");

  return (
    <div
      className="border-white opacity-75 w-[2.8rem] aspect-square"

      style={`
        border-${borderSides[0]}-width: .6rem;
        border-${borderSides[1]}-width: .6rem;
      `}
    />
  );
}
