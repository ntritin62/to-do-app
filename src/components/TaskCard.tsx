import React from 'react';
import Image from 'next/image';
import { Task } from '@/generated/prisma';
import Dropdown from './Dropdown';
import Link from 'next/link';

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const { title, description, priority, status } = task;
  const statusBorderMap: Record<string, string> = {
    done: 'border-completed',
    in_progress: 'border-pending',
    not_started: 'border-not-start',
  };

  const circle = (
    <div
      className={`top-2 left-2 absolute w-4 h-4 border-[2px] rounded-full bg-transparent ${
        statusBorderMap[status] ?? ''
      }`}
    />
  );

  const priorityColorMap = {
    low: 'text-low',
    medium: 'text-medium',
    high: 'text-high',
  };

  const statusColorMap = {
    not_started: 'text-not-start',
    in_progress: 'text-pending',
    done: 'text-completed',
  };

  return (
    <section className="px-7 py-4 border-1 shadow-xl  border-text-secondary rounded-lg relative">
      {circle}
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Link href={`/my-task/${task.id}`}>
            <h2 className="font-bold">{title}</h2>
          </Link>
          <p className="line-clamp-2 text-text-secondary">{description}</p>
        </div>
        {/* <div className="col-span-5 rounded-2xl overflow-hidden w-[88px] h-[88px] relative justify-self-end">
          <Image src={task.imageUrl} alt={title} fill />
        </div> */}
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
      <div className="absolute right-0 top-2 text-text-secondary">
        <Dropdown task={task} />
      </div>
    </section>
  );
};

export default TaskCard;
