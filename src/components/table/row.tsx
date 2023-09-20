export type RowProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLTableRowElement>
>;

export const Row = ({ children, className = "", ...props }: RowProps) => {
  return (
    <tr {...props} className={`av-table-row ${className}`}>
      {children}
    </tr>
  );
};
