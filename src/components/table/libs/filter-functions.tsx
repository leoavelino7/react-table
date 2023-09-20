export namespace FiltersFunctions {
  const toLowercase = (value: string) => value.toLowerCase();

  export type FilterFn = <T extends object>(
    list: T[],
    prop: keyof T,
    value: string
  ) => T[];

  export const contains: FilterFn = (list, prop, value) => {
    const valueToCompare = toLowercase(value);
    return list.filter((item) =>
      toLowercase(item[prop] as string).includes(valueToCompare)
    );
  };

  export const equals: FilterFn = (list, prop, value) => {
    const valueToCompare = toLowercase(value);
    return list.filter(
      (item) => toLowercase(item[prop] as string) === valueToCompare
    );
  };

  export const lessThan: FilterFn = (list, prop, value) => {
    const valueToCompare = Number(value);
    return list.filter((item) => (item[prop] as number) < valueToCompare);
  };

  export const lessOrEqualThan: FilterFn = (list, prop, value) => {
    const valueToCompare = Number(value);
    return list.filter((item) => (item[prop] as number) <= valueToCompare);
  };

  export const biggerThan: FilterFn = (list, prop, value) => {
    const valueToCompare = Number(value);
    return list.filter((item) => (item[prop] as number) > valueToCompare);
  };

  export const biggerOrEqualThan: FilterFn = (list, prop, value) => {
    const valueToCompare = Number(value);
    return list.filter((item) => (item[prop] as number) >= valueToCompare);
  };
}
