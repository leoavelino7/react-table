import classNames from "classnames";

export type CellProps = Partial<{
  justify: "center" | "start" | "end";
  containerProps: React.HTMLAttributes<HTMLDivElement>;
  as: React.ElementType;
}> &
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableCellElement>>;

export const Cell = ({
  children,
  justify,
  containerProps,
  as,
  ...thProps
}: CellProps) => {
  const Tag = as || "td";

  const className = classNames(
    {
      "justify-center": justify === "center",
      "justify-start": justify === "start",
      "justify-end": justify === "end",
      "av-table-header-column": as === "th",
    },
    "av-table-cell"
  );

  return (
    <Tag {...thProps}>
      <div {...containerProps} className={className}>
        {children}
      </div>
    </Tag>
  );
};
