import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

const initialRows = createRows(10);

export function TableExample5() {
  const [rows, setRows] = useState(initialRows);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th" justify="start">
            ID
          </Table.Cell>
          <Table.CellAdvanced<Row>
            columnName="name"
            initialRows={initialRows}
            setRows={setRows}
            filter={{
              show: true,
              initial: "contains",
            }}
          >
            Name
          </Table.CellAdvanced>
          <Table.CellAdvanced<Row>
            justify="center"
            columnName="age"
            initialRows={initialRows}
            setRows={setRows}
          >
            Age
          </Table.CellAdvanced>
          <Table.CellAdvanced<Row>
            justify="end"
            columnName="birthday"
            initialRows={initialRows}
            setRows={setRows}
            sort={{ show: false }}
            filter={{ show: false }}
          >
            Birthday
          </Table.CellAdvanced>
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
