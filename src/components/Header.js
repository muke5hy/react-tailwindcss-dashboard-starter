import React from 'react';

class Header extends React.Component {
  render = () => {
    return (
      <header className="flex flex-shrink-0">
        <div className="flex-shrink-0 px-4 py-3 bg-gray-700 lg:w-64 lg:bg-gray-800">
          <button
            onClick={() => this.props.onToggleSidebar()}
            className="block text-gray-400 hover:text-gray-200 sm:hidden"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z" />
            </svg>
          </button>

          <button className="hidden sm:flex sm:items-center sm:w-full focus:outline-none">
            <i className="eva eva-activity-outline text-white"></i>
            <span className="hidden lg:inline ml-4 mr-2 text-xs font-medium text-white tracking-widest uppercase">
              Dash
            </span>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-between pl-2 pr-6 bg-gray-700 lg:px-6">
          <div className="ml-auto flex items-center">
            <button className="ml-5 text-lg text-gray-400 hover:text-gray-200 focus:outline-none">
              <i className="eva eva-chevron-down"></i>
            </button>
          </div>
        </div>
      </header>
    );
  };
}
export default Header;
