export type HeaderRowProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLTableRowElement>
>;

export const HeaderRow = ({
  children,
  className = "",
  ...props
}: HeaderRowProps) => {
  return (
    <tr {...props} className={`av-table-header-row ${className}`}>
      {children}
    </tr>
  );
};
