import { ColHTMLAttributes, HTMLAttributes, useCallback, useEffect, useState } from "react";

const useVirtualized = <T,>(
  tableId: string,
  rows: T[],
  rowHeight: number,
  visibleRows: number
): [T[], (event: React.UIEvent<HTMLDivElement, UIEvent>) => void] => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
      console.log("ola");
      setScrollTop(
        (event as unknown as { target: { scrollTop: number } }).target.scrollTop
      );
    },
    []
  );

  const startIndex = Math.floor(scrollTop / rowHeight);
  const endIndex = Math.min(
    rows.length - 1,
    startIndex + Math.ceil(visibleRows) + 1
  );

  const visibleData = rows.slice(startIndex, endIndex + 1);

  console.log(visibleData, scrollTop / rowHeight, endIndex)

  useEffect(() => {
    const table = document.querySelector<HTMLTableElement>(tableId);
    if (!table) return;
    table.style.height = `${rows.length * rowHeight}px`;
  }, [rowHeight, rows.length, tableId]);

  return [visibleData, handleScroll];
};

// type RootVirtualizedProps<T> = {
//   tableId: string;
//   rows: T[];
//   rowHeight: number;
//   visibleRows: number;
//   children: [ReactNode, (rows: T[], rowHeight: number) => JSX.Element];
//   // Body: (props: { rows: T[], rowHeight: number; }) => JSX.Element;
// };

// const RootVirtualized = <T,>({
//   tableId,
//   rowHeight,
//   rows,
//   visibleRows,
//   children,
// }: RootVirtualizedProps<T>) => {
//   const [_rows, handleScroll] = useVirtualized(
//     tableId,
//     rows,
//     rowHeight,
//     visibleRows
//   );

//   return (
//     <div
//       className="av-table-wrapper"
//       style={{ height: "100px", overflowY: "scroll" }}
//       onScroll={handleScroll}
//     >
//       <table id="table-id" className="av-table-root">
//         {children[0]}
//         {children[1](_rows, rowHeight)}
//       </table>
//     </div>
//   );
// };

const Root = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="av-table-wrapper">
      <table id="table-id" className="av-table-root">
        {children}
      </table>
    </div>
  );
};

type BodyVirtualizedProps<T> = {
  tableId: string;
  rows: T[];
  visibleRows: number;
  children: (row: T, index: number) => React.ReactNode;
};

const BodyVirtualized = <T,>({
  tableId,
  children,
  rows,
  visibleRows,
}: BodyVirtualizedProps<T>) => {
  const [_rows, handleScroll] = useVirtualized(
    tableId,
    rows,
    57,
    visibleRows
  );

  console.log({_rows})

  return (
    <tbody
      className="av-table-body"
      style={{ height: "100px", overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      {_rows.map((row, index) => children(row, index))}
    </tbody>
  );
};

const Header = ({ children }: React.PropsWithChildren) => {
  return <thead className="av-table-header">{children}</thead>;
};

const HeaderColumn = ({ children }: React.PropsWithChildren) => {
  return <th className="av-table-header-column">{children}</th>;
};

const Body = ({ children, className = "", ...props }: ColHTMLAttributes<never> & React.PropsWithChildren) => {
  return <tbody {...props} className={`av-table-body ${className}`}>{children}</tbody>;
};

const Row = ({ children, className = "", ...props }: React.PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>) => {
  return <tr {...props} className={`av-table-row ${className}`}>{children}</tr>;
};

const Cell = ({ children }: React.PropsWithChildren) => {
  return <td className="av-table-cell">{children}</td>;
};

// type RootVirtualizedProps<T,> = {
//   tableId: string;
//   rows: T[];
//   rowHeight: number;
//   visibleRows: number;
//   children: (row: T, rowHeight: number) => JSX.Element;
// }

// const RootVirtualized = <T,>({
//   tableId,
//   rowHeight,
//   rows,
//   visibleRows,
//   children,
// }: RootVirtualizedProps<T>) => {
//   const [_rows, handleScroll] = useVirtualized(
//     tableId,
//     rows,
//     rowHeight,
//     visibleRows
//   );

//   return (
//     <div
//       className="av-table-wrapper"
//       style={{ height: "100px", overflowY: "scroll" }}
//       onScroll={handleScroll}
//     >
//       <table id="table-id" className="av-table-root">
//         {children[0]}
//         {children[1](_rows, rowHeight)}
//       </table>
//     </div>
//   );
// };


export const Table = {
  BodyVirtualized,
  Root,
  // RootVirtualized,
  Header,
  HeaderColumn,
  Body,
  Row,
  Cell,
};
