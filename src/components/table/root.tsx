export const Root = ({ children }: React.PropsWithChildren) => (
  <div className="av-table-wrapper">
    <table id="table-id" className="av-table-root">
      {children}
    </table>
  </div>
);
