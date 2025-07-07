import React from 'react';
import Wrapper from '@/components/Wrapper';
import { Task } from '@/generated/prisma';
import TaskCard from '@/components/TaskCard';
import { getAllTasks } from '@/actions/taskActions';
import Button from '@/components/Button';
const MyTaskLayout = async ({ children }: { children: React.ReactNode }) => {
  const tasks: Task[] = await getAllTasks();
  return (
    <div className="col-span-3 p-8 grid grid-cols-2 gap-4">
      <Wrapper className="col-span-1 overflow-y-auto max-h-[650px] h-[650px]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center justify-between gap-3">
            {/* <Image src={Pending} alt="Pending Tasks" width={24} height={24} /> */}
            <h2 className="text-primary font-bold">My Tasks</h2>
          </div>
          <div>
            <Button>
              <div className="flex gap-2 items-center text-primary cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p className="text-text-secondary text-xs">Add task</p>
              </div>
            </Button>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
      <Wrapper className="col-span-1">{children}</Wrapper>
    </div>
  );
};

export default MyTaskLayout;
