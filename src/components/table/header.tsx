import { Props } from "../../types";

export type HeaderProps<T extends React.ElementType = "thead"> = Props<T>;

export const Header = <T extends React.ElementType>({
  children,
  as,
  ...props
}: HeaderProps<T>) => {
  const Component = as || "thead";

  return <Component {...props}>{children}</Component>;
};
