import React from 'react';
import ProgressBar from './ProgressBar';
import Image from 'next/image';
import checkIcon from '@/assets/images/check.svg';
import { getTaskStatusStats } from '@/actions/taskActions';

const ProgressBarTab = async () => {
  const { done, inProgress, notStarted } = await getTaskStatusStats();
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <Image src={checkIcon} alt="check icon" />
        <h2 className="text-primary">Task Status</h2>
      </div>
      <div className="flex justify-center gap-5">
        <ProgressBar color={'#16a34a'} value={done} label="Completed" />
        <ProgressBar color={'#3b82f6'} value={inProgress} label="In-progress" />
        <ProgressBar color={'#6b7280'} value={notStarted} label="Not started" />
      </div>
    </>
  );
};

export default ProgressBarTab;
