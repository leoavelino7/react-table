import { Props } from "../../types";
import { applyClassName } from "../../libs/apply-class-name";

export type CellProps<T extends React.ElementType = "td"> = Props<
  T,
  Partial<{
    justify: "center" | "start" | "end";
  }>
>;

export const Cell = <T extends React.ElementType = "td">({
  children,
  justify,
  as,
  className = "",
  ...props
}: CellProps<T>) => {
  const Component = as || "td";

  const _className = applyClassName(true, className, {
    "justify-center text-center": justify === "center",
    "justify-start text-start": justify === "start",
    "justify-end text-end": justify === "end",
  });

  return (
    <Component {...props} className={_className}>
      {children}
    </Component>
  );
};
