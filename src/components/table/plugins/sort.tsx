import { useState } from "react";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export type Sort = "asc" | "desc";

const defaultLabels: Map<Sort, string> = new Map([
  ["asc", "Ascending"],
  ["desc", "Descending"],
]);

type SortComponentProps = {
  initialSort: Sort;
  onApply: (sort: Sort) => void;
  sortLabels?: Map<Sort, string>;
};

export const SortComponent = ({
  initialSort,
  onApply,
  sortLabels = defaultLabels,
}: SortComponentProps) => {
  const [currentSort, setCurrentSort] = useState(initialSort);

  const apply = () => {
    const newSort = currentSort === "asc" ? "desc" : "asc";
    setCurrentSort(newSort);
    onApply(newSort);
  };

  const Icon =
    currentSort === "asc" ? AiOutlineSortAscending : AiOutlineSortDescending;

  const label = sortLabels.get(currentSort) ?? defaultLabels.get(currentSort);

  return (
    <button onClick={apply} className="av-sort-button" aria-label={label}>
      <Icon className="av-sort-icon" title={label} />
    </button>
  );
};
