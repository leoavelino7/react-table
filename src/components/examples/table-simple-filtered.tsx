import { useState } from "react";
import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { FilterApply } from "../table/filter";

const rows = createRows(100);

export function TableSimpleFiltered() {
  const [rowsFiltered] = useState(rows);

  const applyFilters = (filtersApplied: FilterApply[]) => {
    console.log(filtersApplied);
  };

  return (
    <div>
      <h1>Avelino Table</h1>
      <Table.Root>
        <Table.Header>
          <Table.HeaderColumn<"string">
            filters={["contains", "equal"]}
            applyFilters={applyFilters}
          >
            Name
          </Table.HeaderColumn>
          <Table.HeaderColumn<"number">
            filters={["lessThan"]}
            applyFilters={applyFilters}
          >
            Age
          </Table.HeaderColumn>
          <Table.HeaderColumn>Birthday</Table.HeaderColumn>
        </Table.Header>
        <Table.Body rows={rowsFiltered}>
          {(row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.age}</Table.Cell>
              <Table.Cell>{row.birthday}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
    </div>
  );
}
