# 🎓 Knite Edu

A modern full-stack Student Management System built with React, Node.js, Express, and Supabase/PostgreSQL.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?logo=express)](https://expressjs.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)](https://supabase.com/)

## ✨ Features

- **📱 Modern Stack**: Latest React, Express.js, and TypeScript
- **🗄️ Real-time Database**: Supabase with PostgreSQL backend
- **🔧 RESTful API**: Clean Express.js architecture with proper endpoints
- **⏱️ Automated Timestamps**: Auto-updating `created_at` and `updated_at` fields
- **📈 Scalable Structure**: Production-ready with modular architecture
- **🔄 Complete CRUD**: Full Create, Read, Update, Delete operations
- **🛡️ Type Safety**: TypeScript across frontend and backend
- **🎨 Modern UI**: Responsive design with Tailwind CSS

## 📋 Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Development Mode](#development-mode)
  - [Available Scripts](#available-scripts)
- [Development](#development)
  - [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [Base URL](#base-url)
  - [Student Endpoints](#student-endpoints)
  - [Example Requests](#example-requests)


## 🚀 About The Project

**Knite Edu** is a comprehensive Student Management System designed to streamline educational administration. This full-stack application provides a modern interface for managing student data with real-time updates and robust API endpoints.

**Key Highlights:**
- Complete CRUD operations for student management
- Type-safe development with TypeScript
- Real-time database capabilities with Supabase
- Responsive UI built with Tailwind CSS
- RESTful API with proper error handling

### Built With

[![React][React-badge]](https://reactjs.org/)
[![Node.js][Node.js-badge]](https://nodejs.org/)
[![Express.js][Express.js-badge]](https://expressjs.com/)
[![Supabase][Supabase-badge]](https://supabase.io/)
[![PostgreSQL][PostgreSQL-badge]](https://www.postgresql.org/)
[![TypeScript][TypeScript-badge]](https://www.typescriptlang.org/)
[![Tailwind CSS][Tailwind-badge]](https://tailwindcss.com/)

[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Node.js-badge]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Express.js-badge]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Supabase-badge]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[PostgreSQL-badge]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[TypeScript-badge]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Tailwind-badge]: https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or later)
  ```bash
  node --version
  ```
- **Supabase Account** - [Sign up for free](https://supabase.com/dashboard)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/knite-edu.git
   cd knite-edu
   ```

2. **Install Supabase CLI globally**
   ```bash
   npm install -g supabase
   ```

3. **Set up Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory and add your Supabase credentials:
   ```env
   # backend/.env
   PORT=5000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NODE_ENV=development
   ```

4. **Set up Frontend**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory:
   ```env
   # frontend/.env
   REACT_APP_BACKEND_URL=http://localhost:5000
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 💻 Usage

### Development Mode

Open two terminal windows:

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
> Server runs on: `http://localhost:5000`

**Terminal 2 - Frontend Development:**
```bash
cd frontend
npm start
```
> App opens at: `http://localhost:3000`

### Available Scripts

**Backend:**
```bash
npm start      # Start production server
npm run dev    # Start development server with hot reload
npm test       # Run tests
npm run lint   # Run ESLint
```

**Frontend:**
```bash
npm start      # Start development server
npm run build  # Build for production
npm test       # Run tests
npm run lint   # Run ESLint and TypeScript checking
```

## 🛠️ Development
### Environment Variables
Ensure you have `.env` files in both `backend` and `frontend` directories as described in the Installation section.
<details>
<summary>Click to see environment variable details</summary>
<p>

**Backend (`backend/.env`):**
```env
PORT=5000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NODE_ENV=development
```

**Frontend (`frontend/.env`):**
```env
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```
</p>
</details>



📚 API Documentation
### Base URL
```
http://localhost:5000/api
```

### Student Endpoints
| Method | Endpoint        | Description           | Request Body                                  |
|:-------|:----------------|:----------------------|:----------------------------------------------|
| GET    | `/students`     | Get all students      | -                                             |
| GET    | `/students/:id` | Get student by ID     | -                                             |
| POST   | `/students`     | Create a new student  | `{name, email, age, grade, enrollment_date}`  |
| PUT    | `/students/:id` | Update a student      | `{name, email, age, grade, enrollment_date}`  |
| DELETE | `/students/:id` | Delete a student      | -                                             |

### Example Requests
**Create a student:**
```bash
curl -X POST http://localhost:5000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name": "Alex Brown", "email": "alex@example.com", "age": 23, "grade": "A", "enrollment_date": "2024-01-20"}'
```

**Get all students:**
```bash
curl http://localhost:5000/api/students
```

**Update a student:**
```bash
curl -X PUT http://localhost:5000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "John Updated", "age": 21, "grade": "A+"}'
```

**Delete a student:**
```bash
curl -X DELETE http://localhost:5000/api/students/1
```
