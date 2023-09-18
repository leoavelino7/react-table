import { useState } from "react";
import { createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { FilterApply } from "../table/header-column";

const rows = createRows(100);

export function TableSimpleFiltered() {
  const [filtersApplied, setFiltersApplied] = useState<FilterApply[]>([]);

  console.log({filtersApplied});

  return (
    <div>
      <h1>Avelino Table</h1>
      <Table.Root>
        <Table.Header>
          <Table.HeaderColumn filters={["contains"]} applyFilters={setFiltersApplied} >Name</Table.HeaderColumn>
          <Table.HeaderColumn filters={["lessThan", "lessOrEqualThan", "biggerOrEqualThan", "biggerThan"]}>Age</Table.HeaderColumn>
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
