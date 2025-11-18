export interface User {
  id: number;
  email: string;
  name: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'PENDING' | 'COMPLETED';
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TasksResponse {
  tasks: Task[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: 'PENDING' | 'COMPLETED';
}
