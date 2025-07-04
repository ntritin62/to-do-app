'use client';
import React from 'react';
import { useModal } from '@/context/ModalContext';
import TaskFormModal from './TaskFormModal';
import { Task } from '@/type/task';

const Button = ({
  children,
  task,
}: {
  children: React.ReactNode;
  task?: Task;
}) => {
  const { openModal } = useModal();
  return (
    <button
      className="btn-soft"
      onClick={() => {
        openModal(<TaskFormModal task={task} />);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
