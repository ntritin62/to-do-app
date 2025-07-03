import React from 'react';

const Dropdown = () => {
  return (
    <>
      <details className="dropdown dropdown-end dropdown-bottom">
        <summary className="btn btn-ghost rounded-2xl btn-xs border-0 bg-transparent">
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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </summary>
        <ul className="menu dropdown-content bg-white rounded-box z-1 max-w-auto p-1 rounded-xl shadow-sm">
          <li>
            <a>Edit</a>
          </li>
          <li>
            <a>Delete</a>
          </li>
          <li>
            <a>Finish</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default Dropdown;
