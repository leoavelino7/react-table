import { Props } from "../../types";

export type BodyProps<T extends React.ElementType> = Props<T>;

export const Body = <T extends React.ElementType = "tbody">({
  children,
  as,
  ...props
}: BodyProps<T>) => {
  const Component = as || "tbody";
  return <Component {...props} data-component="table-body">{children}</Component>;
};
