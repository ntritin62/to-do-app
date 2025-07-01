import Image from 'next/image';
import Pending from '@/assets/images/pending.svg';
import { Task } from '@/type/task';
import TaskCard from '@/components/TaskCard';
export const tasks: Task[] = [
  {
    id: '1',
    title: 'Thiết kế giao diện đăng nhập',
    description: 'Tạo mockup cho trang đăng nhập bằng Figma',
    priority: 'medium',
    status: 'not-started',
    imageUrl:
      'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
    createdOn: new Date('2025-07-01T08:00:00Z'),
    dueDate: new Date('2025-07-05T17:00:00Z'),
  },
  {
    id: '2',
    title: 'Xây dựng API xác thực người dùng',
    description: 'Tạo API login, register, và reset password',
    priority: 'high',
    status: 'in-progress',
    imageUrl:
      'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
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
    imageUrl:
      'https://tiktak.com.vn/wp-content/uploads/2024/04/dieu-hanh-cuoc-hop-hieu-qua-2.jpg',
    createdOn: new Date('2025-06-20T09:00:00Z'),
    updatedOn: new Date('2025-06-25T16:00:00Z'),
    dueDate: new Date('2025-06-26T00:00:00Z'),
  },
];

export default function Home() {
  return (
    <div className="col-span-3 p-8 grid grid-cols-2 gap-4">
      <section className="col-span-1 shadow-xl py-4 px-10 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <Image src={Pending} alt="Pending Tasks" width={24} height={24} />
            <h2 className="text-primary">To-Do</h2>
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
      </section>
      <section className="col-span-1">
        <h1 className="text-3xl font-bold">Welcome to the Todo App</h1>
        <p className="mt-4 text-gray-600">Manage your tasks efficiently.</p>
      </section>
    </div>
  );
}
