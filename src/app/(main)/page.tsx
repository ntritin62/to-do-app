import Image from 'next/image';
import Pending from '@/assets/images/pending.svg';
import { Task } from '@/generated/prisma';
import TaskCard from '@/components/TaskCard';
import ProgressBarTab from '@/components/ProgressBarTab';
import Wrapper from '@/components/Wrapper';
import completedIcon from '@/assets/images/complete.svg';
import Button from '@/components/Button';
import { getAllTasks } from '@/actions/taskActions';

export default async function Home() {
  const tasks: Task[] = await getAllTasks();
  return (
    <div className="col-span-3 p-8 grid grid-cols-2 gap-4 min-h-[700px]">
      <Wrapper className="col-span-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3 mb-2">
            <Image src={Pending} alt="Pending Tasks" width={24} height={24} />
            <h2 className="text-primary">To-Do</h2>
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
        <div className="max-h-[550px] h-[550px] overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
      <div className="col-span-1 grid grid-rows-5 gap-4">
        <Wrapper className="row-span-2">
          <ProgressBarTab />
        </Wrapper>
        <Wrapper className="row-span-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-3">
              <Image
                src={completedIcon}
                alt="completed Tasks"
                width={24}
                height={24}
              />
              <h2 className="text-primary">Completed Task</h2>
            </div>
          </div>
          <ul className="mt-3 overflow-y-auto max-h-[300px] flex flex-col gap-4">
            {tasks
              .filter((task) => task.status === 'done')
              .map((task) => (
                <li key={task.id}>
                  <TaskCard task={task} />
                </li>
              ))}
          </ul>
        </Wrapper>
      </div>
    </div>
  );
}
