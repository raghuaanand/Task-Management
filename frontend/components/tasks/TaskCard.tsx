'use client';

import { Task } from '@/types';
import { useState } from 'react';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

export default function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this task?')) {
      setDeleting(true);
      await onDelete(task.id);
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <input
            type="checkbox"
            checked={task.status === 'COMPLETED'}
            onChange={() => onToggle(task.id)}
            className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold ${
                task.status === 'COMPLETED' ? 'line-through text-gray-500' : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p
                className={`mt-1 text-sm ${
                  task.status === 'COMPLETED' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {task.description}
              </p>
            )}
            <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
              <span>{new Date(task.createdAt).toLocaleDateString()}</span>
              <span
                className={`px-2 py-1 rounded-full ${
                  task.status === 'COMPLETED'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {task.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-600 hover:text-red-800 text-sm font-medium disabled:opacity-50"
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
