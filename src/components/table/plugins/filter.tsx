import { Fragment, useState } from "react";
import { FiltersFunctions } from "../libs/filter-functions";

import { RiFilter2Fill, RiFilter2Line } from "react-icons/ri";

export type FilterPluginProps = {
  enabled: boolean;
  initialFilter: FiltersFunctions.Filter;
  defaultValue: string;
  columnName: string;
  onApply: (
    columnName: string,
    filterSelected: FiltersFunctions.Filter,
    value: string
  ) => void;
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
  { value: "fuzzySearch", label: "Fuzzy Search" },
];

const defaultLabels: Map<boolean, string> = new Map([
  [false, "Open filter"],
  [true, "Close filter"],
]);

export const FilterPlugin = ({
  enabled,
  initialFilter,
  defaultValue,
  columnName,
  onApply,
}: FilterPluginProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [valueSelect, setValueSelect] = useState(initialFilter);
  const [value, setValue] = useState(defaultValue);

  const getElementsAndApply = (elements: HTMLFormControlsCollection) => {
    const filterElement = elements.namedItem("filter") as HTMLSelectElement;
    const valueElement = elements.namedItem("value") as HTMLInputElement;

    if (filterElement && valueElement) {
      onApply(
        columnName,
        filterElement.value as FiltersFunctions.Filter,
        valueElement.value
      );
    }
  };

  const apply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getElementsAndApply(e.currentTarget.elements);
    setIsOpen(false);
  };

  const reset = (e: React.FormEvent<HTMLFormElement>) => {
    getElementsAndApply(e.currentTarget.elements);
  };

  const removeFilter = () => {
    onApply(columnName, "" as FiltersFunctions.Filter, "");
    setValue("");
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const changeValueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSelect(e.target.value as FiltersFunctions.Filter);
  };

  const Icon = isOpen ? RiFilter2Fill : RiFilter2Line;

  const label = defaultLabels.get(isOpen);

  return (
    <Fragment>
      <button onClick={toggleDropdown} aria-label={label} disabled={!enabled}>
        <Icon className="av-sort-icon" title={label} />
      </button>
      {isOpen ? (
        <div className="av-filter">
          <form onSubmit={apply} onReset={reset}>
            <div className="input">
              <label htmlFor="filter">Filter</label>
              <select
                id="filter"
                name="filter"
                value={valueSelect}
                onChange={changeValueSelect}
              >
                {options.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="input">
              <label htmlFor="value">Value</label>
              <input
                id="value"
                name="value"
                type="text"
                placeholder="Value"
                onChange={changeValue}
                value={value}
              />
            </div>
            <div className="controller">
              <button type="button" onClick={removeFilter} disabled={!enabled}>
                Remove
              </button>
              <button type="submit" disabled={!enabled}>
                Apply
              </button>
            </div>
            {/* <button type="reset" disabled={!enabled}>
            Reset
          </button> */}
          </form>
        </div>
      ) : null}
    </Fragment>
  );
};
