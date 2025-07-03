'use client';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
type ProgressBarProps = {
  color: string;
  value: number;
  label: string;
};
const ProgressBar = ({ color, value, label }: ProgressBarProps) => {
  return (
    <div>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: 'black',
          trailColor: '#e5e5e5',
        })}
      />
      <div className="text-center mt-2 text-xs">
        <span style={{ color: color }}>●</span> {label}
      </div>
    </div>
  );
};

export default ProgressBar;
