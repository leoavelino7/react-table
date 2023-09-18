import { Filters, FilterComponent, FilterTypeOf, FilterApply } from "./filter";

type WithFilter<T extends FilterTypeOf> = {
  filters: Filters<T>;
  applyFilters: (filtersApply: FilterApply[]) => void;
} & React.PropsWithChildren;

type WithoutFilter = {
  filters?: undefined | [];
  applyFilters?: undefined;
} & React.PropsWithChildren;

type HeaderColumnProps<T extends FilterTypeOf> = WithFilter<T> | WithoutFilter;

export const HeaderColumn = <T extends FilterTypeOf>({
  children,
  applyFilters = () => {},
  filters = [],
}: HeaderColumnProps<T>) => {
  return (
    <th className="av-table-header-column">
      {filters.length === 0 ? null : (
        <FilterComponent filters={filters} onApply={applyFilters} />
      )}
      {children}
    </th>
  );
};
