import { Props } from "../../types";
import { applyClassName } from "../../libs/apply-class-name";
import { createDataAttributes } from "../../libs/create-data-attributes";

export type RootProps<T extends React.ElementType = "table"> = Props<
  T,
  Partial<{
    withStyles?: boolean;
    withStripes: boolean;
    withHighlightOnHover: boolean;
    withTableBorder: boolean;
    withColumnBorders: boolean;
    withRowBorders: boolean;
  }>
>;

export const Root = <T extends React.ElementType = "table">({
  children,
  withStyles = true,
  withStripes = false,
  withHighlightOnHover = false,
  withTableBorder = false,
  withColumnBorders = false,
  withRowBorders = false,
  className = "",
  as,
  ...tableProps
}: RootProps<T>) => {
  const Component = as || "table";

  const dataAttributes = createDataAttributes({
    component: "table",
    "with-stripes": withStripes,
    "with-highlight-on-hover": withHighlightOnHover,
    "with-table-border": withTableBorder,
    "with-column-borders": withColumnBorders,
    "with-row-borders": withRowBorders,
  });

  const _className = applyClassName(withStyles, className);

  return (
    <div data-component="table-wrapper">
      <Component {...tableProps} {...dataAttributes} className={_className}>
        {children}
      </Component>
    </div>
  );
};
