import classNames from "classnames";

export type HeaderCellProps = Partial<{
  justify: "center" | "start" | "end";
  containerProps: React.HTMLAttributes<HTMLDivElement>;
}> &
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableCellElement>>;

export const HeaderCell = ({
  children,
  justify,
  containerProps,
  ...thProps
}: HeaderCellProps) => {
  const className = classNames(
    {
      "justify-center": justify === "center",
      "justify-start": justify === "start",
      "justify-end": justify === "end",
    },
    "av-table-header-column"
  );

  return (
    <th {...thProps}>
      <div {...containerProps} className={className}>
        {children}
      </div>
    </th>
  );
};
