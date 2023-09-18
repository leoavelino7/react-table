import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

const initialRows = createRows(10);

export function TableExample1() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Birthday</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>

      <Table.Body rows={initialRows}>
        {(row) => (
          <Table.BodyRow key={row.id}>
            <Table.BodyCell>{row.id}</Table.BodyCell>
            <Table.BodyCell>{row.name}</Table.BodyCell>
            <Table.BodyCell>{row.age}</Table.BodyCell>
            <Table.BodyCell>{row.birthday}</Table.BodyCell>
          </Table.BodyRow>
        )}
      </Table.Body>
    </Table.Root>
  );
}
