import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { TableSortPlugin } from "../table/plugins/header-cell";

const initialRows = createRows(10);

export function TableExample2() {
  const [rows, setRows] = useState(initialRows);

  return (
    <Table.Root>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell justify="start">ID</Table.HeaderCell>
          <TableSortPlugin.HeaderCell<Row>
            columnName="name"
            enabled
            initialSort="asc"
            rows={rows}
            onApply={setRows}
          >
            Name
          </TableSortPlugin.HeaderCell>

          <TableSortPlugin.HeaderCell<Row>
            columnName="name"
            enabled={false}
            initialSort="asc"
            rows={rows}
            onApply={setRows}
          >
            Age
          </TableSortPlugin.HeaderCell>

          <TableSortPlugin.HeaderCell<Row>
            justify="center"
            columnName="age"
            enabled={false}
            initialSort="asc"
            rows={rows}
            onApply={setRows}
          >
            Age
          </TableSortPlugin.HeaderCell>

          <Table.HeaderCell justify="end">Birthday</Table.HeaderCell>
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
