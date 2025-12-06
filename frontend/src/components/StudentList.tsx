import React, { useEffect, useState } from 'react';


interface Student {
  id: number;
  name: string;
  email: string;
}

const dummyStudents: Student[] = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
  { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com" },
];

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Simulate API call with dummy data
    setStudents(dummyStudents);
  }, []);

  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleEdit = (id: number) => {
    console.log("Edit student with id:", id);
  };

  const handleAdd = () => {
    const newStudent: Student = {
      id: students.length + 1,
      name: `New Student ${students.length + 1}`,
      email: `new${students.length + 1}@example.com`,
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Students</h2>
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Student
        </button>
      </div>

      <table className="min-w-full border border-gray-200 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <button
                  onClick={() => handleEdit(student.id)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {error && (
            <tr>
              <td colSpan={5} className="text-center py-4 text-red-500 font-bold">
                {error}
              </td>
            </tr>
          )}
          {!error && students.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
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
