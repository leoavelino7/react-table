import { HeaderCellProps } from "../header-cell";
import { SortFunctions } from "../libs/sort-functions";
import { Table } from "../table";
import { Sort, SortPlugin } from "./sort";

type SortProps<Row extends object> = {
  columnName: SortFunctions.PropToSort<Row>;
  enabled: boolean;
  rows: Row[];
  initialSort: Sort;
  onApply: (rows: Row[]) => void;
};

export type HeaderCellWithSortProps<Row extends object> = HeaderCellProps &
  SortProps<Row>;

const HeaderCell = <Row extends object>({
  columnName,
  initialSort,
  enabled,
  onApply,
  rows,
  children,
  ...props
}: HeaderCellWithSortProps<Row>) => {
  const apply = (_: string, sort: Sort) => {
    const rowsSorted = SortFunctions.orderBy(rows, columnName, sort);
    onApply(rowsSorted);
  };

  return (
    <Table.HeaderCell {...props}>
      {children}
      <SortPlugin
        columnName={columnName as string}
        enabled={enabled}
        initialSort={initialSort}
        onApply={apply}
      />
    </Table.HeaderCell>
  );
};

export const TableSortPlugin = {
  HeaderCell,
};
