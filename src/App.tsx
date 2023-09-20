import { Fragment, useState } from "react";
import { TableExample } from "./components/examples/table-example";
import { TableExample1 } from "./components/examples/table-example-1";
import { TableExample2 } from "./components/examples/table-example-2";
import { TableExample3 } from "./components/examples/table-example-3";
import { TableExample4 } from "./components/examples/table-example-4";
import { AppTheme } from "./components/app-theme";

type Examples =
  | "TableExample"
  | "TableExample1"
  | "TableExample2"
  | "TableExample3"
  | "TableExample4";

type Option = {
  value: Examples;
  label: string;
};

const options: Option[] = [
  { value: "TableExample", label: "Tabela + sort" },
  { value: "TableExample1", label: "Tabela" },
  { value: "TableExample2", label: "Tabela + sort (já integrado)" },
  { value: "TableExample3", label: "" },
  { value: "TableExample4", label: "Tabela + sort + filtro" },
];

const componentMap: Map<Examples, () => JSX.Element> = new Map([
  ["TableExample", TableExample],
  ["TableExample1", TableExample1],
  ["TableExample2", TableExample2],
  ["TableExample3", TableExample3],
  ["TableExample4", TableExample4],
]);

export default function App() {
  const [selected, setSelected] = useState(options[0].value);

  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value as Examples);
  };

  const Component = componentMap.get(selected);

  return (
    <div>
      <AppTheme />
      <select value={selected} onChange={changeSelect}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
      <br />
      {Component ? <Component /> : <Fragment />}
    </div>
  );
}
