import { CellProps } from "./cell";
import { Table } from "./table";
import { FilterPlugin, FilterPluginProps } from "./plugins/filter";
import { FiltersFunctions } from "./libs/filter-functions";

export type CellWithFilterProps<Row extends object> = CellProps & {
  initialRows: Row[];
  setRows: (rows: Row[]) => void;
} & Omit<FilterPluginProps, "onApply">;

export const CellWithFilter = <Row extends object>({
  columnName,
  initialFilter,
  enabled,
  defaultValue,
  initialRows,
  setRows,
  children,
  ...props
}: CellWithFilterProps<Row>) => {
  const applyFilter = (
    columnName: string,
    filterSelected: FiltersFunctions.Filter,
    value: string
  ) => {
    const filterFn = FiltersFunctions.functionsMap.get(filterSelected);

    if (!filterFn) return setRows(initialRows);

    const rowsFiltered = filterFn(initialRows, columnName as keyof Row, value);
    setRows(rowsFiltered);
  };

  return (
    <Table.Cell as="th" {...props}>
      {children}
      <FilterPlugin
        enabled={enabled}
        columnName={columnName}
        defaultValue={defaultValue}
        initialFilter={initialFilter}
        onApply={applyFilter}
      />
    </Table.Cell>
  );
};
