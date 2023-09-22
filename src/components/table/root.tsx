import { Props } from "../../types";
import { applyClassName } from "../../libs/apply-class-name";

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

  const _className = applyClassName(
    withStyles,
    className,
    {
      "av_table-root_with-stripes": withStripes,
      "av_table-root_with-highlight-on-hover": withHighlightOnHover,
      "av_table-root_with-table-border": withTableBorder,
      "av_table-root_with-column-borders": withColumnBorders,
      "av_table-root_with-row-borders": withRowBorders,
    },
    "av_table-root"
  );

  return (
    <div className="av_table-wrapper">
      <Component {...tableProps} className={_className}>
        {children}
      </Component>
    </div>
  );
};
