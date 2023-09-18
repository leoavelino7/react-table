import { HTMLAttributes } from "react";

export const HeaderRow = ({
  children,
  className = "",
  ...props
}: React.PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>) => {
  return (
    <tr {...props} className={`av-table-header-row ${className}`}>
      {children}
    </tr>
  );
};
