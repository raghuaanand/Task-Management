# Task Management System

A full-stack task management application with user authentication and complete CRUD operations for tasks.

## Project Overview

This project consists of two main parts:
- **Backend**: RESTful API built with Node.js, TypeScript, Express, and Prisma
- **Frontend**: Web application built with Next.js, TypeScript, and Tailwind CSS

## Features

### Authentication
- User registration and login
- JWT-based authentication with access and refresh tokens
- Secure password hashing with bcrypt
- Token auto-refresh mechanism
- Protected routes

### Task Management
- Create, read, update, and delete tasks
- Toggle task status (Pending/Completed)
- Filter tasks by status
- Search tasks by title or description
- Pagination support
- Real-time updates with toast notifications

### Security
- Password hashing with bcrypt
- JWT token-based authentication
- HTTP-only token handling
- Input validation on both frontend and backend
- CORS configuration

## Tech Stack

### Backend
- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt
- express-validator

### Frontend
- Next.js 16 (App Router)
- TypeScript
- React 19
- Tailwind CSS
- Axios
- React Hot Toast

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## Quick Start

### 1. Clone or Navigate to Project

```bash
cd Task-Management-Assignment
```

### 2. Set Up Backend

```bash
cd backend
npm install
```

Update the `.env` file with your PostgreSQL database credentials:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/taskmanagement?schema=public"
PORT=5000
JWT_ACCESS_SECRET=your-secret-access-key-change-this-in-production
JWT_REFRESH_SECRET=your-secret-refresh-key-change-this-in-production
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
NODE_ENV=development
```

Run database migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the backend server:

```bash
npm run dev
```

The API will be running at `http://localhost:5000`

### 3. Set Up Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

The `.env.local` file is already configured for localhost. Start the frontend:

```bash
npm run dev
```

The application will be running at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout user

### Tasks (Protected)
- `GET /tasks` - Get all tasks (pagination, filtering, search)
- `POST /tasks` - Create new task
- `GET /tasks/:id` - Get specific task
- `PATCH /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task
- `PATCH /tasks/:id/toggle` - Toggle task status

## Project Structure

```
Task-Management-Assignment/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Auth & validation
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utilities (JWT, validators)
│   │   └── index.ts        # Entry point
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   └── .env                # Environment variables
├── frontend/
│   ├── app/                # Next.js pages
│   ├── components/         # React components
│   ├── contexts/           # React contexts
│   ├── lib/                # Utilities
│   ├── types/              # TypeScript types
│   └── .env.local          # Environment variables
└── README.md
```

## Database Schema

### User Table
- id (Primary Key)
- email (Unique)
- password (Hashed)
- name
- refreshToken
- createdAt
- updatedAt

### Task Table
- id (Primary Key)
- title
- description
- status (PENDING/COMPLETED)
- userId (Foreign Key)
- createdAt
- updatedAt

## Usage

1. Start both backend and frontend servers
2. Navigate to `http://localhost:3000`
3. Register a new account or login
4. Create, view, edit, and delete tasks
5. Use filters and search to find tasks
6. Toggle task status with checkboxes

## Development

### Backend Development
```bash
cd backend
npm run dev
```

Access Prisma Studio (database GUI):
```bash
npm run prisma:studio
```

### Frontend Development
```bash
cd frontend
npm run dev
```

## Production Build

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm start
```

## Deployment

### Deploy to Production (Vercel + Neon)

This project is configured for easy deployment to Vercel with Neon PostgreSQL.

**Quick Deploy:**
See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for a rapid deployment guide (20 minutes)

**Comprehensive Guide:**
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step deployment instructions

**Generate JWT Secrets:**
```bash
node generate-secrets.js
```

### Deployment Stack
- **Frontend**: Vercel
- **Backend**: Vercel (Serverless Functions)
- **Database**: Neon PostgreSQL

## Additional Information

For detailed information about each part of the project, see:
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Quick Deploy Reference](./QUICK_DEPLOY.md)

## Key Features Implemented

- JWT authentication with access and refresh tokens
- Password hashing with bcrypt
- Input validation on both client and server
- Pagination for task lists
- Filtering by task status
- Real-time search functionality
- Responsive design for mobile and desktop
- Toast notifications for user feedback
- Protected routes and API endpoints
- Automatic token refresh
- Error handling with proper HTTP status codes
