type Sort = "asc" | "desc";

type Sortable = string | number;

export type PropToSort<T extends object> = {
  [K in keyof T]: T[K] extends Sortable ? K : never;
}[keyof T];

export const sortFunction = <T extends object>(
  list: T[],
  prop: PropToSort<T>,
  sort: Sort
) => {
  const newList = [...list].sort((a, b) => {
    const aValue = a[prop];
    const bValue = b[prop];

    if (typeof aValue === "string" && typeof bValue === "string")
      return aValue.localeCompare(bValue);

    if (typeof aValue === "number" && typeof bValue === "number")
      return aValue > bValue ? 1 : -1;

    return 0;
  });

  return sort === "asc" ? newList : newList.reverse();
};
