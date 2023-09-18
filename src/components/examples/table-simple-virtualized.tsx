// import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";

// const rows = createRows(100);

export function TableSimpleVirtualized() {
  return (
    <div>
      <h1>Avelino Table</h1>
      <Table.Root>
        <Table.Header>
          <Table.HeaderColumn>Line</Table.HeaderColumn>
          <Table.HeaderColumn>ID</Table.HeaderColumn>
          <Table.HeaderColumn>Name</Table.HeaderColumn>
          <Table.HeaderColumn>Age</Table.HeaderColumn>
          <Table.HeaderColumn>Birthday</Table.HeaderColumn>
        </Table.Header>
        {/* <Table.BodyVirtualized visibleRows={5} tableId="table-id" rows={rows}>
          {(row, index) => (
            <Table.Row key={row.id}>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.age}</Table.Cell>
              <Table.Cell>{row.birthday}</Table.Cell>
            </Table.Row>
          )}
        </Table.BodyVirtualized> */}
      </Table.Root>
    </div>
  );
}
