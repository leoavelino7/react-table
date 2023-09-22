import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { Sort, SortConfig, SortPlugin } from "../table/plugins/sort";
import { SortFunctions } from "../table/libs/sort-functions";

const initialRows = createRows(10);

const birthdaySort = (rows: Row[], sort: Sort) => {
  const newList = [...rows].sort((a, b) => {
    const [aDay, aMonth] = a.birthday.split("/");
    const [bDay, bMonth] = b.birthday.split("/");

    const aDate = new Date(`1999-${aMonth}-${aDay}`);
    const bDate = new Date(`1999-${bMonth}-${bDay}`);

    return aDate.getTime() > bDate.getTime() ? 1 : -1;
  });

  return sort === "asc" ? newList : newList.reverse();
};

const sortsFn: Map<
  "birthday" | "default",
  (rows: Row[], columnName: keyof Row, sort: Sort) => Row[]
> = new Map([
  ["birthday", (rows, _, sort) => birthdaySort(rows, sort)],
  ["default", SortFunctions.orderBy],
]);

const getSortFn = (key: string) => {
  return (
    sortsFn.get(key as never) ??
    (sortsFn.get("default") as (
      rows: Row[],
      columnName: keyof Row,
      sort: Sort
    ) => Row[])
  );
};

export function TableExample3() {
  const [rows, setRows] = useState(initialRows);

  const applySort = (columnName: keyof Row, sort: Sort) => {
    const fn = getSortFn(columnName);
    const newList = fn(initialRows, columnName, sort);
    setRows(newList);
  };

  const sortConfig: SortConfig<Row> = {
    enabled: true,
    initial: "asc",
    apply: applySort,
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

      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell justify="start">{row.id}</Table.Cell>
            <Table.Cell justify="center">{row.name}</Table.Cell>
            <Table.Cell justify="center">{row.age}</Table.Cell>
            <Table.Cell justify="end">{row.birthday}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
