'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

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
export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath('/');
}
