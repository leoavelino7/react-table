import { Props } from "../../types";
import { applyClassName } from "../../libs/apply-class-name";

export type CellProps<T extends React.ElementType = "td"> = Props<
  T,
  Partial<{
    alignText: "center" | "start" | "end";
  }>
>;

export const Cell = <T extends React.ElementType = "td">({
  children,
  alignText,
  as,
  className = "",
  ...props
}: CellProps<T>) => {
  const Component = as || "td";

  const _className = applyClassName(true, className, {
    "text-center": alignText === "center",
    "text-start": alignText === "start",
    "text-end": alignText === "end",
  });

  return (
    <Component {...props} data-component="table-cell" className={_className}>
      {children}
    </Component>
  );
};
