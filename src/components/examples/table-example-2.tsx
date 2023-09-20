import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

const initialRows = createRows(10);

export function TableExample2() {
  const [rows, setRows] = useState(initialRows);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" justify="start">
            ID
          </Table.Cell>
          <Table.CellWithSort<Row>
            columnName="name"
            enabled
            initialSort="asc"
            rows={rows}
            onApply={setRows}
          >
            Name
          </Table.CellWithSort>

          <Table.CellWithSort<Row>
            justify="center"
            columnName="age"
            enabled={false}
            initialSort="asc"
            rows={rows}
            onApply={setRows}
          >
            Age
          </Table.CellWithSort>

          <Table.Cell as="th" justify="end">
            Birthday
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
