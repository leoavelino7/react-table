import { FiltersFunctions } from "../libs/filter-functions";

export type FilterPluginProps = {
  enabled: boolean;
  initialFilter: FiltersFunctions.Filter;
  defaultValue: string;
  columnName: string;
  onApply: (columnName: string, filterSelected: FiltersFunctions.Filter, value: string) => void;
};

type Option = {
  value: FiltersFunctions.Filter;
  label: string;
};

const options: Option[] = [
  { value: "lessThan", label: "Less than" },
  { value: "lessOrEqualThan", label: "Less or equal than" },
  { value: "biggerThan", label: "bigger than" },
  { value: "biggerOrEqualThan", label: "bigger or equal than" },
  { value: "contains", label: "Contains" },
  { value: "equals", label: "Equals" },
];

export const FilterPlugin = ({
  enabled,
  initialFilter,
  defaultValue,
  columnName,
  onApply,
}: FilterPluginProps) => {
  const getElementsAndApply = (elements: HTMLFormControlsCollection) => {
    const filterElement = elements.namedItem("filter") as HTMLSelectElement;
    const valueElement = elements.namedItem("value") as HTMLInputElement;

    if (filterElement && valueElement) {
      onApply(columnName, filterElement.value as FiltersFunctions.Filter, valueElement.value);
    }
  };

  const apply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getElementsAndApply(e.currentTarget.elements);
  };

  const reset = (e: React.FormEvent<HTMLFormElement>) => {
    getElementsAndApply(e.currentTarget.elements);
  };

  const removeFilter = () => onApply(columnName, "" as FiltersFunctions.Filter, "");

  return (
    <div className="av-filter-container">
      <form onSubmit={apply} onReset={reset}>
        <label htmlFor="filter">
          Filter
          <select id="filter" name="filter" defaultValue={initialFilter}>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="value">
          Value
          <input
            id="value"
            name="value"
            type="text"
            placeholder="Value"
            defaultValue={defaultValue}
          />
        </label>
        <button type="reset" disabled={!enabled}>
          Reset
        </button>
        <button type="button" onClick={removeFilter} disabled={!enabled}>
          Remove
        </button>
        <button type="submit" disabled={!enabled}>
          Apply
        </button>
      </form>
    </div>
  );
};
