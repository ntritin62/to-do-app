'use client';
import { useEffect, useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { Task } from '@/type/task';

type TaskFormModalProps = {
  task?: Task;
};

export default function TaskFormModal({ task }: TaskFormModalProps) {
  const { closeModal } = useModal();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      const formattedDate = task.dueDate
        ? task.dueDate.toISOString().split('T')[0]
        : '';

      setDate(formattedDate);
      setPriority(task.priority || '');
      setDescription(task.description || '');
    }
  }, [task]);

  const formTitle = task ? 'Edit Task' : 'Add New Task';

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
      <form className="border p-4 rounded space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-1.5 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-3 py-1.5 outline-none"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-semibold">Priority</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === 'high'}
                onChange={() => setPriority('high')}
              />
              <span className="text-red-500">●</span> high
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={priority === 'medium'}
                onChange={() => setPriority('medium')}
              />
              <span className="text-blue-400">●</span> medium
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === 'low'}
                onChange={() => setPriority('low')}
              />
              <span className="text-green-500">●</span> Low
            </label>
          </div>
        </div>

        {/* Task Description & Upload */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Task Description</label>
            <textarea
              className="w-full h-32 border rounded px-3 py-2 resize-none outline-none"
              placeholder="Start writing here…..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Upload Image</label>
            <div className="border border-gray-300 rounded p-4 flex flex-col items-center justify-center h-32 text-center text-sm text-gray-500">
              <div className="mb-2 text-3xl">🖼️</div>
              <div>
                Drag&Drop files here
                <br />
                or
              </div>
              <button className="mt-2 px-3 py-1 border border-gray-300 rounded">
                Browse
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded shadow hover:bg-orange-600"
          onClick={(e) => {
            e.preventDefault();
            console.log({ title, date, priority, description });
            closeModal();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
