import { useState } from "react";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export type Sort = "asc" | "desc";

export type SortConfig = {
  enabled: boolean;
  initial: Sort;
  apply: (columnName: string, sort: Sort) => void;
};

const defaultLabels: Map<Sort, string> = new Map([
  ["asc", "Ascending"],
  ["desc", "Descending"],
]);

type SortPluginProps = {
  enabled: boolean;
  initialSort: Sort;
  columnName: string;
  onApply: (columnName: string, sort: Sort) => void;
  sortLabels?: Map<Sort, string>;
};

export const SortPlugin = ({
  enabled,
  initialSort,
  columnName,
  onApply,
  sortLabels = defaultLabels,
}: SortPluginProps) => {
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
