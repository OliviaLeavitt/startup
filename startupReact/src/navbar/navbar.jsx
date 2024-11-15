import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthState } from '../login/authState';

const Navbar = ({ authState, logout }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "[Friend's Name] added an item to the grocery list" },
    { id: 2, message: "[Friend's Name] shared a recipe" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(prevNotifications => {
        const newNotifications = [
          ...prevNotifications,
          { id: prevNotifications.length + 1, message: "New notification!" }
        ];
      
        return newNotifications.slice(-5);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function handleLogout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Handle logout failure (e.g., offline fallback)
      })
      .finally(() => {
        localStorage.removeItem('userName'); // Remove user-related data
        logout(); // Call the passed `logout` function
      });
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand no-hover" to="/">MealMate</NavLink>
      {authState === AuthState.Authenticated && (
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
      )}
      <div className={`collapse navbar-collapse ${authState === AuthState.Authenticated ? '' : 'd-none'}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {authState === AuthState.Authenticated && (
            <>
              <li className="nav-item">
                <a className="nav-link no-hover" href="#" title="Notifications">
                  <i className="fa-solid fa-bell notification-icon"></i>
                </a>
                <div className="notification-dropdown">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="notification">
                      {notification.message}
                    </div>
                  ))}
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recipe">Recipes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mealplan">Meal Planning</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/grocery">Grocery List</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link rounded-3" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
