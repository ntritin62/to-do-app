import React from 'react';

const Header = () => {
  return (
    <header className="bg-header shadow-xl">
      <div className="container flex items-center justify-between">
        <h1 className="text-3xl font-bold">Todo App</h1>
        <p className="text-gray-600">Manage your tasks efficiently</p>
      </div>
    </header>
  );
};

export default Header;
