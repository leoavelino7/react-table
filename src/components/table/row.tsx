import { Props } from "../../types";

export type RowProps<T extends React.ElementType = "tr"> = Props<T>;

export const Row = <T extends React.ElementType = "tr">({
  children,
  as,
  ...props
}: RowProps<T>) => {
  const Component = as || "tr";

  return <Component {...props}>{children}</Component>;
};
