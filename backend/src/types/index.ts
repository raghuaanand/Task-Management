import { Request } from 'express';

export interface UserPayload {
  id: number;
  email: string;
}

export interface AuthRequest extends Request {
  user?: UserPayload;
}

export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface TaskDTO {
  title: string;
  description?: string;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string;
  status?: 'PENDING' | 'COMPLETED';
}

export interface TaskQueryParams {
  page?: string;
  limit?: string;
  status?: 'PENDING' | 'COMPLETED';
  search?: string;
}
