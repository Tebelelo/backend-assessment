import React, { useEffect, useState } from 'react';
import EditStudent from './EditStudent';
import { getStudents , addStudent, editStudent, deleteStudent } from "../services/api";

interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await getStudents();
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id);
      setStudents((prevStudents) => prevStudents.filter((s) => s.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  const handleEdit = (id: number) => {
    const studentToEdit = students.find((s) => s.id === id);
    if (studentToEdit) {
      setEditingStudent(studentToEdit);
    }
  };

  const handleAdd = async () => {
    const name = prompt("Enter student name:");
    const email = prompt("Enter student email:");
    const ageString = prompt("Enter student age:");
    if (name && email && ageString) {
      const age = parseInt(ageString, 10);
      if (isNaN(age)) {
        setError("Please enter a valid age.");
        return;
      }
      try {
        setError(null); // Clear previous errors
        const response = await addStudent({ name, email, age });
        const newStudent = response.data;
        setStudents((prevStudents) => [...prevStudents, newStudent]); // Use functional update for safety
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    }
  };

  const handleSaveEdit = async (updatedStudent: Student) => {
    try {
      const response = await editStudent(updatedStudent.id, updatedStudent);
      const savedStudent = response.data;
      setStudents(students.map(s => s.id === savedStudent.id ? savedStudent : s)); 
      setEditingStudent(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Students</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
        >
          Add Student
        </button>
      </div>

      <div className="mb-4 text-center">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left border-b">ID</th>
              <th className="py-3 px-4 text-left border-b">Name</th>
              <th className="py-3 px-4 text-left border-b">Email</th>
              <th className="py-3 px-4 text-left border-b">Age</th>
              <th className="py-3 px-4 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 border-b">{student.id}</td>
                <td className="py-3 px-4 border-b whitespace-nowrap">{student.name}</td>
                <td className="py-3 px-4 border-b">{student.email}</td>
                <td className="py-3 px-4 border-b">{student.age}</td>
                <td className="py-3 px-4 border-b space-x-2 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(student.id)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >Edit</button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >Delete</button>
                </td>
              </tr>
            ))}
            {!loading && students.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {editingStudent && (
        <EditStudent
          student={editingStudent}
          onClose={() => setEditingStudent(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}
