type RootProps = Partial<{
  containerProps: React.HTMLAttributes<HTMLDivElement>;
}> & React.PropsWithChildren<React.HTMLAttributes<HTMLTableElement>>;

export const Root = ({
  children,
  containerProps,
  ...tableProps
}: RootProps) => (
  <div {...containerProps} className="av-table-wrapper">
    <table {...tableProps} className="av-table-root">
      {children}
    </table>
  </div>
);
