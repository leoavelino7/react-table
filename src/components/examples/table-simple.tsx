import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

const rows = createRows(100);

export function TableSimple() {
  return (
    <div>
      <h1>Avelino Table</h1>
      <Table.Root>
        <Table.Header>
          <Table.HeaderColumn>Name</Table.HeaderColumn>
          <Table.HeaderColumn>Age</Table.HeaderColumn>
          <Table.HeaderColumn>Birthday</Table.HeaderColumn>
        </Table.Header>
        <Table.Body>
          {rows.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.age}</Table.Cell>
              <Table.Cell>{item.birthday}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
