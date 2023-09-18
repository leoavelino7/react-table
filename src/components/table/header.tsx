type HeaderProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLTableSectionElement>
>;

export const Header = ({ children, ...theadProps }: HeaderProps) => {
  return (
    <thead {...theadProps} className="av-table-header">
      {children}
    </thead>
  );
};
