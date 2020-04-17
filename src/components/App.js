import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import '../assets/main.css';

class App extends Component {
  state = {
    sidebarOpen: false
  };

  toggleSidebar = () => {
    this.setState(({ sidebarOpen }) => ({ sidebarOpen: !sidebarOpen }));
  };

  render = () => {
    return (
      <div className="h-screen flex flex-col">
        <Header sidebarOpen={this.state.sidebarOpen} onToggleSidebar={this.toggleSidebar} />
        <Content sidebarOpen={this.state.sidebarOpen} onToggleSidebar={this.toggleSidebar} />
      </div>
    );
  };
}

export default App;
