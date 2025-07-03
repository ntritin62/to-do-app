import React from 'react';

const Wrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`col-span-1 shadow-xl py-4 px-10 rounded-xl ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
