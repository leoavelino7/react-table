import { Sort, SortComponent } from "./plugins/sort";
import classNames from "classnames";

export type SortConfig = {
  enabled: boolean;
  initial: Sort;
  apply: (columnName: string, sort: Sort) => void;
};

type HeaderSortProps =
  | { columnName: string; sortConfig: SortConfig }
  | { columnName?: undefined; sortConfig?: undefined };

type Common = Partial<{
  justify: "center" | "start" | "end";
  containerProps: React.HTMLAttributes<HTMLDivElement>;
}> &
  React.PropsWithChildren<React.HTMLAttributes<HTMLTableCellElement>>;

export type HeaderCellProps = HeaderSortProps & Common;

export const HeaderCell = ({
  children,
  sortConfig,
  columnName,
  justify,
  containerProps,
  ...thProps
}: HeaderCellProps) => {
  const className = classNames(
    {
      "justify-center": justify === "center",
      "justify-start": justify === "start",
      "justify-end": justify === "end",
    },
    "av-table-header-column"
  );

  return (
    <th {...thProps}>
      <div {...containerProps} className={className}>
        {children}
        {sortConfig ? (
          <SortComponent
            initialSort={sortConfig.initial}
            onApply={(sort) => sortConfig.apply(columnName, sort)}
          />
        ) : null}
      </div>
    </th>
  );
};
