import { useRef, useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { Sort, SortConfig, SortPlugin } from "../table/plugins/sort";
import { PropToSort, sortFunction } from "../table/libs/sort-function";
import { Filter, FilterPlugin } from "../table/plugins/filter";
import {
  FilterFunction,
  biggerOrEqualThan,
  biggerThan,
  contains,
  equals,
  lessOrEqualThan,
  lessThan,
} from "../table/libs/filter-functions";

const functionsMap = new Map<Filter, FilterFunction>([
  ["contains", contains],
  ["lessThan", lessThan],
  ["lessOrEqualThan", lessOrEqualThan],
  ["biggerThan", biggerThan],
  ["biggerOrEqualThan", biggerOrEqualThan],
  ["equals", equals],
]);

const initialRows = createRows(10);

type ColumnsToSort = PropToSort<Row>;

export function TableExample4() {
  const [rows, setRows] = useState(initialRows);

  const applySort = (columnName: string, sort: Sort) => {
    const newList = sortFunction(rows, columnName as ColumnsToSort, sort);
    setRows(newList);
  };

  const sortConfig: SortConfig = {
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
        <Table.HeaderRow>
          <Table.HeaderCell justify="start">ID</Table.HeaderCell>
          <Table.HeaderCell>
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
          </Table.HeaderCell>
          <Table.HeaderCell justify="center">
            Age
            <SortPlugin
              enabled={false}
              columnName="age"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
          </Table.HeaderCell>
          <Table.HeaderCell justify="end">
            Birthday
            <SortPlugin
              enabled
              columnName="birthday"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>

      <Table.Body rows={rows}>
        {(row) => (
          <Table.BodyRow key={row.id}>
            <Table.BodyCell justify="start">{row.id}</Table.BodyCell>
            <Table.BodyCell justify="center">{row.name}</Table.BodyCell>
            <Table.BodyCell justify="center">{row.age}</Table.BodyCell>
            <Table.BodyCell justify="end">{row.birthday}</Table.BodyCell>
          </Table.BodyRow>
        )}
      </Table.Body>
    </Table.Root>
  );
}
