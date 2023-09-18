export type BodyRowProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLTableRowElement>
>;

export const BodyRow = ({
  children,
  className = "",
  ...trProps
}: BodyRowProps) => {
  return (
    <tr {...trProps} className={`av-table-row ${className}`}>
      {children}
    </tr>
  );
};
