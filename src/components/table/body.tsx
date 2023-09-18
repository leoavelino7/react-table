type BodyProps<T> = {
  rows: T[];
  children: (row: T, index: number) => JSX.Element;
} & Omit<React.HTMLAttributes<HTMLTableSectionElement>, "children">;

export const Body = <T,>({
  children,
  rows,
  className = "",
  ...tBodyProps
}: BodyProps<T>) => {
  return (
    <tbody {...tBodyProps} className={`av-table-body ${className}`}>
      {rows.map((item, index) => {
        return children(item, index);
      })}
    </tbody>
  );
};
