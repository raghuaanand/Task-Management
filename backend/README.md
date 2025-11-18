# Task Management API - Backend

A secure RESTful API built with Node.js, TypeScript, Express, and Prisma for managing user tasks.

## Features

- User authentication with JWT (Access & Refresh tokens)
- Secure password hashing with bcrypt
- Task CRUD operations
- Task pagination, filtering, and searching
- PostgreSQL database with Prisma ORM
- Input validation with express-validator
- CORS enabled for frontend integration

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- JWT for authentication
- bcrypt for password hashing

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Update the `.env` file with your configuration:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/taskmanagement?schema=public"
PORT=5000
JWT_ACCESS_SECRET=your-secret-access-key-change-this-in-production
JWT_REFRESH_SECRET=your-secret-refresh-key-change-this-in-production
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
NODE_ENV=development
```

### 3. Set Up Database

Make sure PostgreSQL is running, then run:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will create the database tables and generate the Prisma client.

### 4. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout user (requires authentication)

### Tasks

All task endpoints require authentication (Bearer token in Authorization header)

- `GET /tasks` - Get all tasks (supports pagination, filtering, searching)
  - Query params: `page`, `limit`, `status`, `search`
- `POST /tasks` - Create a new task
- `GET /tasks/:id` - Get a specific task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task
- `PATCH /tasks/:id/toggle` - Toggle task status (PENDING/COMPLETED)

## Project Structure

```
backend/
├── src/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Authentication & validation middleware
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions (JWT, validators)
│   └── index.ts        # Application entry point
├── prisma/
│   └── schema.prisma   # Database schema
└── .env                # Environment variables
```

## Database Schema

### User
- id (Int, Primary Key)
- email (String, Unique)
- password (String, Hashed)
- name (String)
- refreshToken (String, Optional)
- createdAt (DateTime)
- updatedAt (DateTime)

### Task
- id (Int, Primary Key)
- title (String)
- description (String, Optional)
- status (Enum: PENDING, COMPLETED)
- userId (Int, Foreign Key)
- createdAt (DateTime)
- updatedAt (DateTime)

## Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
