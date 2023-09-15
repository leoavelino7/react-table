const Root = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="av-table-wrapper">
      <table className="av-table-root">{children}</table>
    </div>
  );
};

const Header = ({ children }: React.PropsWithChildren) => {
  return <thead className="av-table-header">{children}</thead>;
};

const HeaderColumn = ({ children }: React.PropsWithChildren) => {
  return <th className="av-table-header-column">{children}</th>;
};

const Body = ({ children }: React.PropsWithChildren) => {
  return <tbody className="av-table-body">{children}</tbody>;
};

const Row = ({ children }: React.PropsWithChildren) => {
  return <tr className="av-table-row">{children}</tr>;
};

const Cell = ({ children }: React.PropsWithChildren) => {
  return <td className="av-table-cell">{children}</td>;
};

export const Table = { Root, Header, HeaderColumn, Body, Row, Cell };
