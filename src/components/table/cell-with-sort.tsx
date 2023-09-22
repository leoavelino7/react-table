import { CellProps } from "./cell";
import { SortFunctions } from "./libs/sort-functions";
import { Table } from ".";
import { Sort, SortPlugin } from "./plugins/sort";

export type SortProps<Row extends object> = {
  columnName: SortFunctions.PropToSort<Row>;
  enabled: boolean;
  rows: Row[];
  initialSort: Sort;
  onApply: (rows: Row[]) => void;
};

export type CellWithSortProps<Row extends object> = CellProps &
  SortProps<Row>;

export const CellWithSort = <Row extends object>({
  columnName,
  initialSort,
  enabled,
  onApply,
  rows,
  children,
  ...props
}: CellWithSortProps<Row>) => {
  const apply = (_: string, sort: Sort) => {
    const rowsSorted = SortFunctions.orderBy(rows, columnName, sort);
    onApply(rowsSorted);
  };

  return (
    <Table.Cell as="th" {...props}>
      {children}
      <SortPlugin
        columnName={columnName as string}
        enabled={enabled}
        initialSort={initialSort}
        onApply={apply}
      />
    </Table.Cell>
  );
};
