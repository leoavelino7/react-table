import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table";
import { Sort, SortConfig, SortPlugin } from "../table/plugins/sort";
import { SortFunctions } from "../table/libs/sort-functions";
import { FilterPlugin } from "../table/plugins/filter";
import { FiltersFunctions } from "../table/libs/filter-functions";

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
    filterSelected: FiltersFunctions.Filter,
    value: string
  ) => {
    const filterFn = FiltersFunctions.functionsMap.get(filterSelected);

    if (!filterFn) return setRows(initialRows);

    const rowsFiltered = filterFn(initialRows, columnName as keyof Row, value);
    setRows(rowsFiltered);
  };

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" alignText="start">
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
          <Table.Cell as="th" alignText="center">
            Age
            <SortPlugin
              enabled={false}
              columnName="age"
              initialSort={sortConfig.initial}
              onApply={sortConfig.apply}
            />
          </Table.Cell>
          <Table.Cell as="th" alignText="end">
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

      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell alignText="start">{row.id}</Table.Cell>
            <Table.Cell alignText="center">{row.name}</Table.Cell>
            <Table.Cell alignText="center">{row.age}</Table.Cell>
            <Table.Cell alignText="end">{row.birthday}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
