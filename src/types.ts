export type Polymorphism<T extends React.ElementType = React.ElementType> =
  React.PropsWithChildren<{
    as?: T;
  }>;

export type Props<
  T extends React.ElementType,
  P extends object = object
> = Polymorphism<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof Polymorphism<T>> & P;
