import React from 'react';
import Wrapper from '@/components/Wrapper';
import { Task } from '@/type/task';
import TaskCard from '@/components/TaskCard';
// import Image from 'next/image';
import Button from '@/components/Button';
export const tasks: Task[] = [
  {
    id: '1',
    title: 'Thiết kế giao diện đăng nhập',
    description: 'Tạo mockup cho trang đăng nhập bằng Figma',
    priority: 'medium',
    status: 'not-started',
    // imageUrl:
    //   'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
    createdOn: new Date('2025-07-01T08:00:00Z'),
    dueDate: new Date('2025-07-05T17:00:00Z'),
  },
  {
    id: '2',
    title: 'Xây dựng API xác thực người dùng',
    description: 'Tạo API login, register, và reset password',
    priority: 'high',
    status: 'in-progress',
    // imageUrl:
    //   'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
    createdOn: new Date('2025-06-29T10:30:00Z'),
    updatedOn: new Date('2025-07-01T14:45:00Z'),
    dueDate: new Date('2025-07-03T23:59:59Z'),
  },
  {
    id: '3',
    title: 'Viết tài liệu hướng dẫn sử dụng hệ thống',
    description: 'Tài liệu dành cho người dùng cuối, có ảnh minh họa',
    priority: 'low',
    status: 'done',
    // imageUrl:
    //   'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
    createdOn: new Date('2025-06-20T09:00:00Z'),
    updatedOn: new Date('2025-06-25T16:00:00Z'),
    dueDate: new Date('2025-06-26T00:00:00Z'),
  },
];
const MyTaskLayout = ({ children }: { children: React.ReactNode }) => {
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
