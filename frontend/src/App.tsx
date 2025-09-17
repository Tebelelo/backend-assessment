import React from 'react';
import StudentList from './components/StudentList';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <StudentList />
    </div>
  );
}
