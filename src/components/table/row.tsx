import { HTMLAttributes } from "react";

export const Row = ({
  children,
  className = "",
  ...props
}: React.PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>) => {
  return (
    <tr {...props} className={`av-table-row ${className}`}>
      {children}
    </tr>
  );
};
