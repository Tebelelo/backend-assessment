import { Router } from 'express';
import { getAllStudents as getStudents, createStudent as addStudent, updateStudent as editStudent, removeStudent as deleteStudent } from '../controllers/studentController';

const router = Router();

router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

export default router;
