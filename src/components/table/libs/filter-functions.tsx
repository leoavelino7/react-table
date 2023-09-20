export namespace FiltersFunctions {
  const toLowercase = (value: string) => value.toLowerCase();
  export type Filter =
  | "lessThan"
  | "lessOrEqualThan"
  | "biggerThan"
  | "biggerOrEqualThan"
  | "contains"
  | "equals";

  export type FilterFn = <T extends object>(
    list: T[],
    prop: keyof T,
    value: string | number
  ) => T[];

  export const contains: FilterFn = (list, prop, value) => {
    const valueToCompare = toLowercase(String(value));
    return list.filter((item) =>
      toLowercase(String(item[prop] as string)).includes(valueToCompare)
    );
  };

  export const equals: FilterFn = (list, prop, value) => {
    const valueToCompare = toLowercase(String(value));
    return list.filter(
      (item) => toLowercase(String(item[prop] as string)) === valueToCompare
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

  export const functionsMap = new Map<Filter, FiltersFunctions.FilterFn>([
    ["contains", FiltersFunctions.contains],
    ["lessThan", FiltersFunctions.lessThan],
    ["lessOrEqualThan", FiltersFunctions.lessOrEqualThan],
    ["biggerThan", FiltersFunctions.biggerThan],
    ["biggerOrEqualThan", FiltersFunctions.biggerOrEqualThan],
    ["equals", FiltersFunctions.equals],
  ]);
}
