import React from 'react';
import ProgressBar from './ProgressBar';
import Wrapper from './Wrapper';
import Image from 'next/image';
import checkIcon from '@/assets/images/check.svg';

const ProgressBarTab = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <Image src={checkIcon} alt="check icon" />
        <h2 className="text-primary">Task Status</h2>
      </div>
      <div className="flex justify-center gap-5">
        <ProgressBar color={'#16a34a'} value={15} label="Completed" />
        <ProgressBar color={'#3b82f6'} value={15} label="In-progress" />
        <ProgressBar color={'#6b7280'} value={15} label="Not started" />
      </div>
    </>
  );
};

export default ProgressBarTab;
