# Task Management System - Frontend

A modern, responsive web application built with Next.js and TypeScript for managing tasks.

## Features

- User authentication (Login/Register)
- JWT token management with automatic refresh
- Task dashboard with full CRUD operations
- Task filtering by status (Pending/Completed)
- Real-time task search
- Pagination for task lists
- Toast notifications for user feedback
- Responsive design (mobile and desktop)
- Protected routes

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- React 19
- Tailwind CSS
- Axios for API calls
- React Hot Toast for notifications

## Prerequisites

- Node.js (v16 or higher)
- Backend API running (see backend README)

## Setup Instructions

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Configure Environment Variables

The `.env.local` file is already configured:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Update this if your backend API is running on a different URL.

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── app/
│   ├── dashboard/      # Dashboard page
│   ├── login/          # Login page
│   ├── register/       # Register page
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Home page (redirects)
├── components/
│   ├── tasks/          # Task-related components
│   │   ├── TaskCard.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskFilters.tsx
│   └── ui/             # UI components
│       └── Pagination.tsx
├── contexts/
│   └── AuthContext.tsx # Authentication context
├── lib/
│   ├── api.ts          # Axios instance with interceptors
│   └── auth.ts         # Token management utilities
└── types/
    └── index.ts        # TypeScript type definitions
```

## Features Overview

### Authentication
- Login and registration pages with form validation
- JWT access token stored in localStorage
- Automatic token refresh on expiration
- Protected routes redirect to login if not authenticated

### Task Management
- Create new tasks with title and description
- Edit existing tasks
- Delete tasks with confirmation
- Toggle task status (Pending/Completed)
- Visual feedback with checkboxes and status badges

### Filtering & Search
- Filter tasks by status (All/Pending/Completed)
- Search tasks by title or description
- Results update in real-time with debouncing

### Pagination
- Tasks loaded in batches of 10
- Navigate between pages
- Pagination controls at bottom of task list

### UI/UX
- Clean, modern design with Tailwind CSS
- Responsive layout for all screen sizes
- Toast notifications for all actions
- Loading states for async operations
- Form validation with error messages

## Pages

### Home (`/`)
Redirects to dashboard if authenticated, otherwise to login

### Login (`/login`)
- Email and password fields
- Link to registration page
- Error handling with toast notifications

### Register (`/register`)
- Name, email, and password fields
- Password validation (min 6 characters)
- Link to login page
- Error handling with toast notifications

### Dashboard (`/dashboard`)
- Task creation form
- Filter and search controls
- Task list with cards
- Pagination
- Logout button

## API Integration

The frontend communicates with the backend API using Axios with the following features:

- Automatic JWT token attachment to requests
- Token refresh on 403 errors
- Error handling and user-friendly messages
- Request/response interceptors

## Environment Variables

- `NEXT_PUBLIC_API_URL` - Backend API URL (default: http://localhost:5000)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
