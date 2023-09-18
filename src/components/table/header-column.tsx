import { useState } from "react";

type Filter =
  | "lessThan"
  | "lessOrEqualThan"
  | "biggerThan"
  | "biggerOrEqualThan"
  | "contains";

type HeaderColumnProps = {
  filters?: Filter[];
  applyFilters?: (filtersApply: FilterApply[]) => void;
} & React.PropsWithChildren;

export type FilterApply = {
  column: string;
  filter: Filter;
  value: string;
};

type FilterInputProps = {
  filters: Filter[];
  removeFilter: () => void;
}

const FilterInput = ({ filters, removeFilter }: FilterInputProps) => {
  return (
    <fieldset>
      <div>
        <label htmlFor="">Filter</label>
        <input />
        <select name="filter">
          {filters.map((filter) => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="">Value</label>
        <input />
      </div>
      <button onClick={removeFilter}>X</button>
    </fieldset>
  );
};

type FilterComponentProps = {
  filters: Filter[];
  onApply: (filters: FilterApply[]) => void;
};

const FilterComponent = ({ onApply, filters }: FilterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState([]);

  const [filtersApplied, setFiltersApplied] = useState<string[]>([]);

  const toggle = () => setIsOpen((prev) => !prev);

  const apply = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onApply([]);
  };

  const addFilter = () => {
    // Adicionar linha nova
    // Remover quantidade de possibilidades
    // 
    
  };

  const removeFilter = () => {};

  return (
    <div>
      <button onClick={toggle}>F</button>
      {isOpen ? (
        <div>
          <form onSubmit={apply}>
            {lines.map(() => (
              <FilterInput />
            ))}
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

export const HeaderColumn = ({ children, filters = [] }: HeaderColumnProps) => {
  const apply = () => {};

  return (
    <th className="av-table-header-column">
      {filters.length === 0 ? null : (
        <FilterComponent filters={filters} onApply={apply} />
      )}
      {children}
    </th>
  );
};
