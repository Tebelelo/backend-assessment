import { Request, Response } from 'express';
import * as studentModel from '../models/student';
import { Student } from '../types';

export const getAllStudents = async (_req: Request, res: Response) => {
  try {
    const students = await studentModel.getStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || age === undefined) {
      return res.status(400).json({ message: 'Missing name, email, or age' });
    }

    const newStudentData: Omit<Student, 'id'> = { name, email, age };
    const newStudent = await studentModel.addStudent(newStudentData);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const { name, email, age } = req.body;
    if (!name && !email && age === undefined) {
      return res.status(400).json({ message: 'No update data provided (name, email, or age)' });
    }

    const updatedStudent = await studentModel.editStudent(studentId, { name, email, age });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

export const removeStudent = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.id, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    const success = await studentModel.deleteStudent(studentId);
    if (!success) {
      
      return res.status(404).json({ message: 'Student not found or could not be deleted' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
