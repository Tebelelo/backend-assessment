import { Request, Response } from 'express';
import { Student, students } from '../models/student';

export const getStudents = (_req: Request, res: Response) => res.json(students);

export const addStudent = (req: Request, res: Response) => {
  const newStudent: Student = { id: Date.now(), ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

export const editStudent = (req: Request, res: Response) => {
  const student = students.find(s => s.id === +req.params.id);
  if (!student) return res.status(404).json({ message: 'Student not found' });
  Object.assign(student, req.body);
  res.json(student);
};

export const deleteStudent = (req: Request, res: Response) => {
  const index = students.findIndex(s => s.id === +req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Student not found' });
  students.splice(index, 1);
  res.json({ message: 'Deleted successfully' });
};
