export interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
}

export const students: Student[] = [
  { id: 1, name: 'Alice', age: 20, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 22, email: 'bob@example.com' },
];
