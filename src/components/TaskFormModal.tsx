'use client';
import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { Task } from '@/generated/prisma';
import { createTask, updateTask } from '@/actions/taskActions';
import { useActionState } from 'react';

type TaskFormModalProps = {
  task?: Task;
};

export default function TaskFormModal({ task }: TaskFormModalProps) {
  const isEdit = !!task;
  const { closeModal } = useModal();

  const [formState, formAction, isPending] = useActionState(
    (_: any, formData: FormData) =>
      isEdit
        ? updateTask(task!.id, task.status, formData)
        : createTask(formData),
    { success: false }
  );

  useEffect(() => {
    if (formState.success) {
      closeModal();
    }
  }, [formState.success, closeModal]);

  const formattedDate = task?.dueDate
    ? task.dueDate.toISOString().split('T')[0]
    : '';

  const formTitle = isEdit ? 'Edit Task' : 'Add New Task';

  return (
    <div className="bg-white w-[700px] rounded-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold relative">
          {formTitle}
          <div className="absolute bottom-[-4px] left-0 w-10 h-[2px] bg-red-500" />
        </h2>
        <button onClick={closeModal} className="text-sm font-medium underline">
          Go Back
        </button>
      </div>

      {/* Form */}
      <form action={formAction} className="border p-4 rounded space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={task?.title ?? ''}
            className="w-full border rounded px-3 py-1.5 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input
            type="date"
            name="dueDate"
            defaultValue={formattedDate}
            className="w-full border rounded px-3 py-1.5 outline-none"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-semibold">Priority</label>
          <div className="flex items-center gap-6">
            {(['high', 'medium', 'low'] as const).map((level) => (
              <label key={level} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  defaultChecked={task?.priority === level}
                />
                <span
                  className={`${
                    level === 'high'
                      ? 'text-red-500'
                      : level === 'medium'
                      ? 'text-blue-400'
                      : 'text-green-500'
                  }`}
                >
                  ●
                </span>{' '}
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Task Description</label>
          <textarea
            name="description"
            defaultValue={task?.description ?? ''}
            className="w-full h-32 border rounded px-3 py-2 resize-none outline-none"
            placeholder="Start writing here…..."
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isPending}
            className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-orange-600 disabled:opacity-50"
          >
            {isPending ? 'Saving...' : 'Done'}
          </button>
        </div>
      </form>
    </div>
  );
}
