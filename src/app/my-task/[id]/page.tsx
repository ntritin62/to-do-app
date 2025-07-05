import React from 'react';
import { Task } from '@/type/task';
import Image from 'next/image';
import Button from '@/components/Button';
const task: Task = {
  id: '3',
  title: 'Viết tài liệu hướng dẫn sử dụng hệ thống',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim perspiciatis ipsum aliquid! Perspiciatis, omnis. Sequi amet accusantium, tempore laboriosam provident illo consectetur quaerat vel nisi reiciendis atque nihil, tempora cumque ex asperiores sapiente minus numquam odit! Nihil, optio, ex harum nobis corporis sequi aspernatur amet adipisci consectetur ab illum, voluptas odit corrupti distinctio repellendus sapiente aliquam. Quasi, ipsum quos dignissimos unde quo modi? Nulla, optio culpa. Aspernatur sequi atque fugit quae dolores consectetur, dolore odit facere voluptatum recusandae omnis sunt eaque possimus esse soluta dolor dignissimos ab voluptatem. Ex inventore optio rem consequatur perferendis alias. Assumenda expedita consequatur praesentium! Doloribus sint ipsam nemo animi mollitia excepturi recusandae nihil, cupiditate deleniti esse ea perspiciatis non pariatur omnis optio reiciendis distinctio dicta assumenda natus cumque tenetur ad vitae inventore? Nostrum, veniam mollitia. Mollitia accusamus deserunt voluptas enim quam aliquid molestiae dolor rerum fuga nesciunt et maiores quod perferendis fugit atque sed laboriosam similique aut, sapiente corrupti! Explicabo rem praesentium ipsum voluptates qui, debitis, numquam expedita atque nam consequuntur provident maiores autem tempora aut. Exercitationem itaque, vitae nobis adipisci temporibus tempore totam iusto mollitia quas earum quidem aut, beatae consequuntur pariatur optio suscipit ipsa ea voluptatem commodi obcaecati numquam facere officiis. Impedit.',
  priority: 'low',
  status: 'done',
  imageUrl:
    'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
  createdOn: new Date('2025-06-20T09:00:00Z'),
  updatedOn: new Date('2025-06-25T16:00:00Z'),
  dueDate: new Date('2025-06-26T00:00:00Z'),
};

const TaskDetails = () => {
  const { title, description, priority, status, imageUrl, dueDate } = task;

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
    <>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="col-span-1 font-bold text-red-700 mb-3 ">
            Dued on: <span>{new Date(dueDate).toLocaleDateString()}</span>
          </p>
          <h2 className="font-bold">{title}</h2>
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
        <div className="rounded-2xl overflow-hidden w-[158px] h-[158px] relative justify-self-end shrink-0">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div>
        <p className="col-span-1 mt-5">
          <span className="font-bold">Description: </span>
          <span className="text-text-secondary">{description}</span>
        </p>
      </div>
      <div className="mt-4 justify-self-end">
        <button className="btn btn-soft bg-primary text-white p-2 rounded-2xl">
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <Button task={task}>
          <div className="btn btn-soft bg-primary text-white p-2 rounded-2xl">
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
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
        </Button>
      </div>
    </>
  );
};

export default TaskDetails;
