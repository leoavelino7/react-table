import { useState } from "react";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export type Sort = "asc" | "desc";


type KeyofOrType<T> = T extends object ? keyof T : T

export type SortConfig<T> = {
  enabled: boolean;
  initial: Sort;
  apply: (columnName: KeyofOrType<T>, sort: Sort) => void;
};

const defaultLabels: Map<Sort, string> = new Map([
  ["asc", "Ascending"],
  ["desc", "Descending"],
]);

export type SortPluginProps<T extends object | string> = {
  enabled: boolean;
  initialSort: Sort;
  columnName: KeyofOrType<T>;
  onApply: (columnName: KeyofOrType<T>, sort: Sort) => void;
  sortLabels?: Map<Sort, string>;
};

export const SortPlugin = <T extends object | string>({
  enabled,
  initialSort,
  columnName,
  onApply,
  sortLabels = defaultLabels,
}: SortPluginProps<T>) => {
  const [currentSort, setCurrentSort] = useState(initialSort);

  const apply = () => {
    const newSort = currentSort === "asc" ? "desc" : "asc";
    setCurrentSort(newSort);
    onApply(columnName, newSort);
  };

  const Icon =
    currentSort === "asc" ? AiOutlineSortAscending : AiOutlineSortDescending;

  const label = sortLabels.get(currentSort) ?? defaultLabels.get(currentSort);

  return (
    <button
      onClick={apply}
      className="av-sort-button"
      aria-label={label}
      disabled={!enabled}
    >
      <Icon className="av-sort-icon" title={label} />
    </button>
  );
};
