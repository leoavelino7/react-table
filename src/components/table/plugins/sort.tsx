import { useState } from "react";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

export type Sort = "asc" | "desc";

type SortComponentProps = {
  initialSort: Sort;
  onApply: (sort: Sort) => void;
};

export const SortComponent = ({ initialSort, onApply }: SortComponentProps) => {
  const [currentSort, setCurrentSort] = useState(initialSort);

  const apply = () => {
    const newSort = currentSort === "asc" ? "desc" : "asc";
    setCurrentSort(newSort);
    onApply(newSort);
  };

  const Icon = currentSort === "asc" ? AiOutlineSortAscending : AiOutlineSortDescending;

  return (
    <button onClick={apply}>
      <Icon />
    </button>
  );
};
