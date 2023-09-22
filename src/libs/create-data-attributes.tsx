type DataAttribute = Record<`data-${string}`, string>;

export const createDataAttributes = (
  attributes: Record<string, string | boolean | undefined>
) => {
  const dataAttributes = Object.entries(attributes).reduce<DataAttribute>(
    (acc, [key, value]) => {
      if (value === undefined || value === false) return acc;
      return { ...acc, [`data-${key}`]: value };
    },
    {}
  );
  return Object.keys(dataAttributes).length === 0 ? undefined : dataAttributes;
};
