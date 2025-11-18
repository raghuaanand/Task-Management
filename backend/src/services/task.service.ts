import prisma from '../config/database';
import { TaskDTO, UpdateTaskDTO, TaskQueryParams } from '../types';

export const createTask = async (userId: number, data: TaskDTO) => {
  const task = await prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      userId,
    },
  });

  return task;
};

export const getTasks = async (userId: number, query: TaskQueryParams) => {
  const page = parseInt(query.page || '1');
  const limit = parseInt(query.limit || '10');
  const skip = (page - 1) * limit;

  const where: any = { userId };

  if (query.status) {
    where.status = query.status;
  }

  if (query.search) {
    where.OR = [
      { title: { contains: query.search, mode: 'insensitive' } },
      { description: { contains: query.search, mode: 'insensitive' } },
    ];
  }

  const [tasks, total] = await Promise.all([
    prisma.task.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.task.count({ where }),
  ]);

  return {
    tasks,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getTaskById = async (userId: number, taskId: number) => {
  const task = await prisma.task.findFirst({
    where: { id: taskId, userId },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};

export const updateTask = async (userId: number, taskId: number, data: UpdateTaskDTO) => {
  const task = await prisma.task.findFirst({
    where: { id: taskId, userId },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data,
  });

  return updatedTask;
};

export const deleteTask = async (userId: number, taskId: number) => {
  const task = await prisma.task.findFirst({
    where: { id: taskId, userId },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  await prisma.task.delete({
    where: { id: taskId },
  });
};

export const toggleTaskStatus = async (userId: number, taskId: number) => {
  const task = await prisma.task.findFirst({
    where: { id: taskId, userId },
  });

  if (!task) {
    throw new Error('Task not found');
  }

  const newStatus = task.status === 'PENDING' ? 'COMPLETED' : 'PENDING';

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { status: newStatus },
  });

  return updatedTask;
};
