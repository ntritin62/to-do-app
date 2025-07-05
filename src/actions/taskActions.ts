'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// CREATE
export async function createTask(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const priority = formData.get('priority') as 'low' | 'medium' | 'high';
  const dueDate = formData.get('dueDate') as string;

  await prisma.task.create({
    data: {
      title,
      description,
      priority,
      status: 'not_started',
      dueDate: dueDate ? new Date(dueDate) : null,
    },
  });

  revalidatePath('/');
  return { success: true };
}

// READ ALL
export async function getAllTasks() {
  return prisma.task.findMany({
    orderBy: { createdOn: 'desc' },
  });
}

// READ ONE
export async function getTaskById(id: string) {
  console.log(id);
  return prisma.task.findUnique({
    where: { id },
  });
}

// UPDATE
export async function updateTask(
  id: string,
  status: 'not_started' | 'in_progress' | 'done',
  formData: FormData
) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const priority = formData.get('priority') as 'low' | 'medium' | 'high';
  const dueDate = formData.get('dueDate') as string;

  await prisma.task.update({
    where: { id },
    data: {
      title,
      description,
      priority,
      status,
      dueDate: dueDate ? new Date(dueDate) : null,
    },
  });

  revalidatePath('/');
  return { success: true };
}

// DELETE
export async function deleteTask(formData: FormData) {
  const id = formData.get('id') as string;
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/');
  redirect('/my-task');
}

export async function updateTaskStatus(formData: FormData) {
  const id = formData.get('id') as string;
  const currentStatus = formData.get('status') as string;

  let nextStatus: 'in_progress' | 'done' | null = null;
  if (currentStatus === 'not_started') nextStatus = 'in_progress';
  else if (currentStatus === 'in_progress') nextStatus = 'done';

  if (!id || !nextStatus) return;

  await prisma.task.update({
    where: { id },
    data: { status: nextStatus },
  });

  revalidatePath('/');
}

export async function getTaskStatusStats() {
  const [done, inProgress, notStarted, total] = await Promise.all([
    prisma.task.count({ where: { status: 'done' } }),
    prisma.task.count({ where: { status: 'in_progress' } }),
    prisma.task.count({ where: { status: 'not_started' } }),
    prisma.task.count(),
  ]);

  const toPercent = (count: number) =>
    total === 0 ? 0 : Math.round((count / total) * 100);

  return {
    total,
    done: toPercent(done),
    inProgress: toPercent(inProgress),
    notStarted: toPercent(notStarted),
  };
}
