'use client';
import React from 'react';
import { Task } from '@/generated/prisma';
import { useModal } from '@/context/ModalContext';
import TaskFormModal from './TaskFormModal';
import { updateTaskStatus, deleteTask } from '@/actions/taskActions';

const Dropdown = ({ task }: { task: Task }) => {
  const { openModal } = useModal();
  const isFinishable = task.status !== 'done';
  return (
    <>
      <details className="dropdown dropdown-end dropdown-bottom">
        <summary className="btn btn-ghost rounded-2xl btn-xs border-0 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </summary>
        <ul className="menu dropdown-content bg-white rounded-box !z-10 max-w-auto p-1 rounded-xl shadow-sm">
          <li>
            <button
              onClick={() => {
                openModal(<TaskFormModal task={task} />);
              }}
            >
              <a>Edit</a>
            </button>
          </li>
          <li>
            <form action={deleteTask}>
              <input type="hidden" name="id" value={task.id} />
              <button type="submit">Delete</button>
            </form>
          </li>
          {isFinishable && (
            <li>
              <form action={updateTaskStatus}>
                <input type="hidden" name="id" value={task.id} />
                <input type="hidden" name="status" value={task.status} />
                <button type="submit">
                  {task.status === 'not_started' ? 'Start' : 'Finish'}
                </button>
              </form>
            </li>
          )}
        </ul>
      </details>
    </>
  );
};

export default Dropdown;
