import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;