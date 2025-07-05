export type Task = {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  // imageUrl?: string;
  createdOn: Date;
  updatedOn?: Date;
  dueDate?: Date;
};
export type TaskStatus = 'not-started' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';
