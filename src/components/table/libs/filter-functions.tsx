const toLowercase = (value: string) => value.toLowerCase();

export type FilterFunction = <T extends object>(list: T[], prop: keyof T, value: string) => T[];

export const contains: FilterFunction = (list, prop, value) => {
  const valueToCompare = toLowercase(value);
  return list.filter((item) => toLowercase(item[prop] as string).includes(valueToCompare));
}

export const equals: FilterFunction = (list, prop, value) => {
  const valueToCompare = toLowercase(value);
  return list.filter((item) => toLowercase(item[prop] as string) === valueToCompare);
}

export const lessThan: FilterFunction = (list, prop, value) => {
  const valueToCompare = Number(value);
  return list.filter((item) => item[prop] as number < valueToCompare);
}

export const lessOrEqualThan: FilterFunction = (list, prop, value) => {
  const valueToCompare = Number(value);
  return list.filter((item) => item[prop] as number <= valueToCompare);
}


export const biggerThan: FilterFunction = (list, prop, value) => {
  const valueToCompare = Number(value);
  return list.filter((item) => item[prop] as number > valueToCompare);
}

export const biggerOrEqualThan: FilterFunction = (list, prop, value) => {
  const valueToCompare = Number(value);
  return list.filter((item) => item[prop] as number >= valueToCompare);
}