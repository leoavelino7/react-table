import classNames from "classnames";

export type BodyCellProps = Partial<{
  justify: "center" | "start" | "end";
  containerProps: React.HTMLAttributes<HTMLDivElement>;
}> &
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableCellElement>>;

export const BodyCell = ({
  children,
  justify,
  containerProps,
  ...tdProps
}: BodyCellProps) => {
  const className = classNames(
    {
      "justify-center": justify === "center",
      "justify-start": justify === "start",
      "justify-end": justify === "end",
    },
    "av-table-cell"
  );

  return (
    <td {...tdProps}>
      <div {...containerProps} className={className}>
        {children}
      </div>
    </td>
  );
};
