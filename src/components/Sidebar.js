import React from 'react';

const Sidebar = () => (
  <nav className="mt-16 sm:mt-0">
    <div className="mt-8 px-6">
      <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Dashboard</h2>
      <div className="mt-3">
        <a
          href="#"
          className="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
        >
          <span className="inline-flex items-center">
            <i
              className="eva eva-layers-outline fill-current text-gray-500"
              style={{ fontSize: '26px' }}
            ></i>
            <span className="ml-2 text-gray-900">Inbox</span>
          </span>
          <span className="inline-block w-9 text-center leading-none text-xs font-semibold text-gray-700 rounded-full">
            6
          </span>
        </a>
        <a
          href="#"
          className="mt-2 -mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
        >
          <span className="inline-flex">
            <i
              className="eva eva-layers-outline fill-current text-gray-500"
              style={{ fontSize: '26px' }}
            ></i>
            <span className="ml-2 text-gray-700">Flagged</span>
          </span>
        </a>
      </div>
      <h2 className="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">Tags</h2>
      <div className="mt-4">
        <a href="#" className="block text-sm font-medium text-gray-700">
          Completed
        </a>
        <a href="#" className="mt-4 block text-sm font-medium text-gray-700">
          Failed
        </a>
        <a href="#" className="mt-4 block text-sm font-medium text-gray-700">
          Delayed
        </a>
      </div>
    </div>
  </nav>
);

export default Sidebar;
