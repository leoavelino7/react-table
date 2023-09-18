import { useState } from "react";
import { Row, createRows } from "../../libs/static-rows";
import { Table } from "../table/table";
import { Sort } from "../table/plugins/sort";
import { PropToSort, sortFunction } from "../table/libs/sort-function";

const initialRows = createRows(10);

// Função customizada de ordenação
const birthdaySort = (rows: Row[], sort: Sort) => {
  const newList = [...rows].sort((a, b) => {
    const [aDay, aMonth] = a.birthday.split("/");
    const [bDay, bMonth] = b.birthday.split("/");

    const aDate = new Date(`1999-${aMonth}-${aDay}`);
    const bDate = new Date(`1999-${bMonth}-${bDay}`);

    return aDate.getTime() > bDate.getTime() ? 1 : -1;
  });

  return sort === "asc" ? newList : newList.reverse();
};

type ColumnsToSort = PropToSort<Row>;

export function TableExample() {
  const [rows, setRows] = useState(initialRows);

  const applySort = (columnName: string, sort: Sort) => {
    if (columnName === "birthday") {
      const newList = birthdaySort(rows, sort);
      setRows(newList);
      return;
    }

    const newList = sortFunction(
      initialRows,
      columnName as ColumnsToSort,
      sort
    );
    setRows(newList);
  };

  return (
    <div>
      <h1>Avelino Table</h1>
      <Table.Root>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell
              columnName="name"
              enableSort
              initialSort="asc"
              applySort={applySort}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              enableSort
              columnName="age"
              initialSort="desc"
              applySort={applySort}
            >
              Age
            </Table.HeaderCell>
            <Table.HeaderCell
              columnName="birthday"
              enableSort
              initialSort="asc"
              applySort={applySort}
            >
              Birthday
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>

        <Table.Body rows={rows}>
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
    </div>
  );
}
