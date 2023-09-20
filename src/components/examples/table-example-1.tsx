import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

const initialRows = createRows(10);

export function TableExample1() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell as="th">ID</Table.Cell>
          <Table.Cell as="th">Name</Table.Cell>
          <Table.Cell as="th">Age</Table.Cell>
          <Table.Cell as="th">Birthday</Table.Cell>
        </Table.Row>
      </Table.Header>

      <Table.Body rows={initialRows}>
        {(row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.age}</Table.Cell>
            <Table.Cell>{row.birthday}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table.Root>
  );
}
