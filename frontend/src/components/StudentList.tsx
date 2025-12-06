import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/api';
import { AxiosResponse } from 'axios';


interface Student {
  id: number;
  name: string;
  email: string;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents()
      .then((res: AxiosResponse<Student[]>) => setStudents(res.data))
      .catch(err => console.error("Failed to fetch students:", err));
  }, []);

  const handleDelete = async (id: number) => {
    const originalStudents = [...students];
    // Optimistically update the UI
    setStudents(students.filter(s => s.id !== id));

    try {
      await deleteStudent(id);
    } catch (error) {
      console.error("Failed to delete student:", error);
      // Revert the state if the API call fails
      setStudents(originalStudents);
    }
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
