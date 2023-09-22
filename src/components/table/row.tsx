import { createDataAttributes } from "../../libs/create-data-attributes";
import { Props } from "../../types";

export type RowProps<T extends React.ElementType = "tr"> = Props<
  T,
  Partial<{
    spacing: "xs" | "sm" | "md" | "lg" | "xl";
  }>
>;

export const Row = <T extends React.ElementType = "tr">({
  children,
  spacing = "xs",
  as,
  ...props
}: RowProps<T>) => {
  const Component = as || "tr";

  const dataAttributes = createDataAttributes({
    component: "table-row",
    spacing,
  });

  return (
    <Component {...props} {...dataAttributes}>
      {children}
    </Component>
  );
};
