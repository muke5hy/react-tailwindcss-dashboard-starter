import React from 'react';
import Sidebar from './Sidebar';

class Content extends React.Component {
  render = () => {
    return (
      <div className="flex-1 flex overflow-hidden">
        <div
          className={`z-30 transform fixed inset-y-0 left-0 w-64 bg-gray-100 border-r overflow-y-auto sm:static sm:block sm:translate-x-0 sm:transition-none ${
            this.props.sidebarOpen
              ? 'translate-x-0 ease-out transition-slow'
              : '-translate-x-full ease-in transition-medium'
          }`}
        >
          <div className="absolute top-0 left-0 pl-4 pt-3 sm:hidden">
            <button
              onClick={() => this.props.onToggleSidebar()}
              className="block text-gray-600 hover:text-gray-800"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z" />
              </svg>
            </button>
          </div>
          <Sidebar />
        </div>
        <main className="flex-1 flex bg-gray-200"></main>
      </div>
    );
  };
}
export default Content;
