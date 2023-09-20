import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { Sort, SortConfig, SortPlugin } from "../table/plugins/sort";
import { SortFunctions } from "../table/libs/sort-functions";
import { Filter, FilterPlugin } from "../table/plugins/filter";
import { FiltersFunctions } from "../table/libs/filter-functions";

const functionsMap = new Map<Filter, FiltersFunctions.FilterFn>([
  ["contains", FiltersFunctions.contains],
  ["lessThan", FiltersFunctions.lessThan],
  ["lessOrEqualThan", FiltersFunctions.lessOrEqualThan],
  ["biggerThan", FiltersFunctions.biggerThan],
  ["biggerOrEqualThan", FiltersFunctions.biggerOrEqualThan],
  ["equals", FiltersFunctions.equals],
]);

const initialRows = createRows(10);

type ColumnsToSort = SortFunctions.PropToSort<Row>;

export function TableExample4() {
  const [rows, setRows] = useState(initialRows);

  const applySort = (columnName: string, sort: Sort) => {
    const newList = SortFunctions.orderBy(
      rows,
      columnName as ColumnsToSort,
      sort
    );
    setRows(newList);
  };

  const sortConfig: SortConfig<Row> = {
    enabled: true,
    initial: "asc",
    apply: applySort,
  };

  const applyFilter = (
    columnName: string,
    filterSelected: Filter,
    value: string
  ) => {
    const filterFn = functionsMap.get(filterSelected);

    if (!filterFn) return setRows(initialRows);

    const rowsFiltered = filterFn(initialRows, columnName as keyof Row, value);
    setRows(rowsFiltered);
  };

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" justify="start">
            ID
          </Table.Cell>
          <Table.Cell as="th">
            Name
            <SortPlugin
              enabled
              columnName="name"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
            <FilterPlugin
              enabled
              columnName="name"
              defaultValue="e"
              initialFilter="contains"
              onApply={applyFilter}
            />
          </Table.Cell>
          <Table.Cell as="th" justify="center">
            Age
            <SortPlugin
              enabled={false}
              columnName="age"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
          </Table.Cell>
          <Table.Cell as="th" justify="end">
            Birthday
            <SortPlugin
              enabled
              columnName="birthday"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Header>

      <Table.Body rows={rows}>
        {(row) => (
          <Table.Row key={row.id}>
            <Table.Cell justify="start">{row.id}</Table.Cell>
            <Table.Cell justify="center">{row.name}</Table.Cell>
            <Table.Cell justify="center">{row.age}</Table.Cell>
            <Table.Cell justify="end">{row.birthday}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
}
