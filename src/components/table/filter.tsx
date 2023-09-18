import { useState } from "react";

export type Filter =
  | "lessThan"
  | "lessOrEqualThan"
  | "biggerThan"
  | "biggerOrEqualThan"
  | "equal"
  | "contains";

type FilterMap = {
  string: "contains" | "equal";
  number: "lessThan";
};

export type FilterTypeOf = keyof FilterMap;

export type Filters<T> = T extends FilterTypeOf ? FilterMap[T][] : never;

//
// const FilterInput = <T,>({ filters, removeFilter }: FilterInputProps<T>) => {
//   return (
//     <fieldset>
//       <div>
//         <label htmlFor="">Filter</label>
//         <input />
//         <select name="filter">
//           {filters.map((filter) => (
//             <option value={filter}>{filter}</option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="">Value</label>
//         <input />
//       </div>
//       <button onClick={removeFilter}>X</button>
//     </fieldset>
//   );
// };

export type FilterApply = {
  column: string;
  filter: Filter;
  value: string;
};

type FilterComponentProps = {
  filters: Filter[];
  onApply: (filters: FilterApply[]) => void;
};

export const FilterComponent = (props: FilterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState([]);

  const [filtersApplied, setFiltersApplied] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const applyFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const addFilter = () => {};

  const removeFilter = () => {};

  return (
    <div>
      <button onClick={toggleDropdown}>F</button>
      {isOpen ? (
        <div>
          <form onSubmit={applyFilter}>
            {/* {lines.map(() => (
              <FilterInput />
            ))} */}
            <div>
              <button onClick={addFilter}>Add</button>
              <button type="submit">Apply</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};
