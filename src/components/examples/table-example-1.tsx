import { useState } from "react";
import { createRows } from "../../libs/static-rows";
import { Table } from "../table";

const rows = createRows(10);

export function TableExample1() {
  const [withTableBorder, setWithTableBorder] = useState(false);
  const [withRowBorders, setWithRowBorders] = useState(false);
  const [withColumnBorders, setWithColumnBorders] = useState(false);
  const [withHighlightOnHover, setWithHighlightOnHover] = useState(false);
  const [withStripes, setWithStripes] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setWithTableBorder((prev) => !prev)}>withTableBorder - {String(withTableBorder)}</button>
        <button onClick={() => setWithRowBorders((prev) => !prev)}>withRowBorders - {String(withRowBorders)}</button>
        <button onClick={() => setWithColumnBorders((prev) => !prev)}>withColumnBorders - {String(withColumnBorders)}</button>
        <button onClick={() => setWithHighlightOnHover((prev) => !prev)}>withHighlightOnHover - {String(withHighlightOnHover)}</button>
        <button onClick={() => setWithStripes((prev) => !prev)}>withStripes - {String(withStripes)}</button>
      </div>
      <Table.Root 
        withTableBorder={withTableBorder}
        withRowBorders={withRowBorders}
        withColumnBorders={withColumnBorders}
        withHighlightOnHover={withHighlightOnHover} 
        withStripes={withStripes}
      >
        <Table.Header>
          <Table.Row>
            <Table.Cell as="th">ID</Table.Cell>
            <Table.Cell as="th">Name</Table.Cell>
            <Table.Cell as="th">Age</Table.Cell>
            <Table.Cell as="th">Birthday</Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.id} spacing="xs">
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell alignText="center">{row.age}</Table.Cell>
              <Table.Cell alignText="center">{row.birthday}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
