import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/api';

export default function StudentList() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    getStudents().then(res => setStudents(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    await deleteStudent(id);
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Students</h2>
      <ul>
        {students.map(s => (
          <li key={s.id} className="flex justify-between mb-1">
            {s.name} ({s.email})
            <button onClick={() => handleDelete(s.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
