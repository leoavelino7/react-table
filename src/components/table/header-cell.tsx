import { Sort, SortComponent } from "./plugins/sort";

type HeaderSortProps =
  | {
      enableSort: true;
      columnName: string;
      initialSort: Sort;
      applySort: (columnName: string, sort: Sort) => void;
    }
  | {
      columnName?: undefined;
      enableSort?: false | undefined;
      initialSort?: undefined;
      applySort?: undefined;
    };

export type HeaderCellProps = HeaderSortProps & React.PropsWithChildren;

export const HeaderCell = ({
  children,
  enableSort,
  initialSort,
  applySort = () => {},
  columnName,
}: HeaderCellProps) => {
  return (
    <th className="av-table-header-column">
      {children}
      {enableSort ? (
        <SortComponent
          initialSort={initialSort}
          onApply={(sort) => applySort(columnName, sort)}
        />
      ) : null}
    </th>
  );
};
