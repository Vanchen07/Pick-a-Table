import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className="sidebar-container">
        <div className="sidebar-nav">
          <NavLink className="sidebar-item" to="/">
            Reservations
          </NavLink>
          <NavLink className="sidebar-item" to="/">
            Favorites
          </NavLink>
          <NavLink className="sidebar-item" to="/">
            History
          </NavLink>
        </div>
      </div>
    );
}

export default Sidebar;