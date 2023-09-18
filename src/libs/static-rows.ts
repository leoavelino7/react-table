import { faker } from "@faker-js/faker";

export type Row = {
  id: string;
  name: string;
  age: number;
  birthday: `${string}/${string}`;
};

const format = (n1: number) => `00${n1}`.slice(-2);

export const createRows = (lines: number): Row[] =>
  Array.from({ length: lines }).map(() => ({
    id: faker.database.mongodbObjectId(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 90 }),
    birthday: `${format(faker.number.int({ min: 1, max: 31 }))}/${format(
      faker.number.int({ min: 1, max: 12 })
    )}`,
  }));
