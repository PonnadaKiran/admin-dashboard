import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">CREATIVE TIM</div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Icons</li>
          <li>Map</li>
          <li>Notifications</li>
          <li>User Profile</li>
          <li>Table List</li>
          <li>Typography</li>
          <li>RTL Support</li>
          <li>Upgrade to Pro</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
