import { Table } from "./table";
import { Sort, SortPlugin, SortPluginProps } from "./plugins/sort";
import { CellProps } from "./cell";
import { SortFunctions } from "./libs/sort-functions";
import { FilterPlugin, FilterPluginProps } from "./plugins/filter";
import { FiltersFunctions } from "./libs/filter-functions";

type SortProps<Row extends object> = Partial<{
  show: boolean;
  enabled: SortPluginProps<Row>["enabled"];
  initial: SortPluginProps<Row>["initialSort"];
  labels: SortPluginProps<Row>["sortLabels"];
}>;

const defaultSort: SortProps<never> = {
  show: true,
  enabled: true,
};

type FilterProps = Partial<{
  show: boolean;
  enabled: FilterPluginProps["enabled"];
  initial: FilterPluginProps["initialFilter"];
  defaultValue: FilterPluginProps["defaultValue"];
}>;

const defaultFilter: FilterProps = {
  show: true,
  enabled: true,
};

type CellAdvancedProps<Row extends object> = {
  columnName: SortFunctions.PropToSort<Row>;
  initialRows: Row[];
  setRows: (rows: Row[]) => void;
  sort?: SortProps<Row>;
  filter?: FilterProps;
} & CellProps;

export const CellAdvanced = <Row extends object>({
  filter = defaultFilter,
  sort = defaultSort,
  children,
  initialRows,
  setRows,
  columnName,
  ...props
}: CellAdvancedProps<Row>) => {
  const applySort = (_: string, sort: Sort) => {
    const rowsSorted = SortFunctions.orderBy(initialRows, columnName, sort);
    setRows(rowsSorted);
  };

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
      {sort.show ? (
        <SortPlugin
          enabled={sort.enabled ?? true}
          initialSort={sort.initial ?? "asc"}
          sortLabels={sort.labels}
          columnName={columnName as string}
          onApply={applySort}
        />
      ) : null}
      {filter.show ? (
        <FilterPlugin
          enabled={filter.enabled ?? true}
          columnName={columnName as string}
          defaultValue={filter.defaultValue ?? ""}
          initialFilter={filter.initial ?? "equals"}
          onApply={applyFilter}
        />
      ) : null}
    </Table.Cell>
  );
};
