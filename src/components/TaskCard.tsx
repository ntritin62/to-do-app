import React from 'react';
import { Task } from '@/type/task';
import Image from 'next/image';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, description, priority, status } = task;
  const circle = (
    <div
      className={`top-4 left-2 absolute w-4 h-4 border-[2px] rounded-full bg-transparent ${
        status === 'done'
          ? 'border-completed'
          : status === 'in-progress'
          ? 'border-pending'
          : 'border-not-start'
      }`}
    />
  );

  const priorityColorMap = {
    low: 'text-low',
    medium: 'text-medium',
    high: 'text-high',
  };

  const statusColorMap = {
    'not-started': 'text-not-start',
    'in-progress': 'text-pending',
    done: 'text-completed',
  };

  return (
    <section className="px-8 py-4 shadow-md rounded-lg relative">
      {circle}
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <h2 className="font-bold">{title}</h2>
          <p className="line-clamp-3 text-text-secondary">{description}</p>
        </div>
        <div className="col-span-5 rounded-2xl overflow-hidden w-[88px] h-[88px] relative justify-self-end">
          <Image src={task.imageUrl} alt={title} fill />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 text-[9px] mt-4">
        <p className="col-span-1">
          Priority:{' '}
          <span className={priorityColorMap[priority]}>{priority}</span>
        </p>
        <p className="col-span-1">
          Status: <span className={statusColorMap[status]}>{status}</span>
        </p>
        <p className="col-span-1 text-text-secondary">
          Created on:{' '}
          <span>{new Date(task.createdOn).toLocaleDateString()}</span>
        </p>
      </div>
      <div className="absolute right-1 top-2 text-text-secondary">
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
      </div>
    </section>
  );
};

export default TaskCard;
