import { Props } from "../../types";
import { applyClassName } from "../../libs/apply-class-name";

export type CellProps<T extends React.ElementType = "td"> = Props<
  T,
  Partial<{
    align: "center" | "start" | "end";
  }>
>;

export const Cell = <T extends React.ElementType = "td">({
  children,
  align,
  as,
  className = "",
  ...props
}: CellProps<T>) => {
  const Component = as || "td";

  const _className = applyClassName(true, className, {
    "text-center": align === "center",
    "text-start": align === "start",
    "text-end": align === "end",
  });

  return (
    <Component {...props} data-component="table-cell" className={_className}>
      {children}
    </Component>
  );
};
