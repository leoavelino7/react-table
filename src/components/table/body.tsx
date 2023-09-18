import { ColHTMLAttributes } from "react";

type BodyProps<T> = Omit<ColHTMLAttributes<never>, "children"> & {
  rows: T[];
  children: (row: T, index: number) => JSX.Element;
};

export const Body = <T,>({
  children,
  rows,
  className = "",
  ...props
}: BodyProps<T>) => {
  return (
    <tbody {...props} className={`av-table-body ${className}`}>
      {rows.map((item, index) => {
        return children(item, index);
      })}
    </tbody>
  );
};
