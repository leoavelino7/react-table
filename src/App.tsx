import { useState } from "react";

import { TableSimple } from "./components/examples/table-simple";

const options = [
  { value: "TableSimple", name: "Tabela" },
  // { value: "table-virtualized", name: "Tabela (Virtualizada)" },
  // { value: "table-filtered", name: "Tabela (Filtro)" },
  // {
  //   value: "table-virtualized-filtered",
  //   name: "Tabela (Virtualizada + Filtro)",
  // },
  // { value: "table-front-pagination", name: "Tabela (Front + Paginação)" },
  // {
  //   value: "table-front-pagination-virtualized",
  //   name: "Tabela (Front + Paginação + Virtualizada)",
  // },
  // {
  //   value: "table-front-pagination-filtered",
  //   name: "Tabela (Front + Paginação + Filtro)",
  // },
  // {
  //   value: "table-front-pagination-virtualized-filtered",
  //   name: "Tabela (Front + Paginação + Virtualizada + Filtro)",
  // },
] as const;

type Options = (typeof options)[number]["value"];

const componentsMap = new Map<Options, () => JSX.Element>([
  ["TableSimple", TableSimple],
]);

type SelectProps = {
  value: Options;
  onChange: (value: Options) => void;
};

const Select = ({ value, onChange }: SelectProps) => {
  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Options);
  };

  return (
    <select name="select-table" onChange={change} value={value}>
      {options.map((item) => (
        <option value={item.value}>{item.name}</option>
      ))}
    </select>
  );
};

export default function App() {
  const [selected, setSelected] = useState<Options>("TableSimple");

  const Component = componentsMap.get(selected) || TableSimple;

  return (
    <div>
      <Select value={selected} onChange={setSelected} />
      <Component />
    </div>
  );
}
