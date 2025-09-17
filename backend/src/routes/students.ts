import { Router } from 'express';
import { getStudents, addStudent, editStudent, deleteStudent } from '../controllers/studentController';

const router = Router();

router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', editStudent);
router.delete('/:id', deleteStudent);

export default router;
