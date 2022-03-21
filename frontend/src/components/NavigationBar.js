import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import style from 'styles/components/NavigationBar.scss';
import Auth from 'components/AuthenticationService';
// import { Button } from '@mui/material';

const NavigationBar = () => {

  const loginLink = () => {
    return (
      <section className="navigation-login">
        <Button variant='outlined' href="/login">Login</Button>
        <Button variant='outlined' href="/join">Join</Button>
      </section>
    )
  }

  const logoutLink = () => {
    return (
      <section className="navigation-login">
        <Button variant='outlined' className="logout" onClick={logout}>Logout</Button>
      </section>
    )
  }

  const logout = () => {
    Auth.logout();
    window.location.replace("/");
  }

  return (
    <div className={style}>
      <section className="navigation-bar">
        <section className="navigation-logo">
          <Link to="/">Storage</Link>
        </section>
        <nav className="navigation-nav">
          <ul className="navs">
            <li><Link to="/workout">workout</Link></li>
            <li><Link to="/learning">learning</Link></li>
            <li><Link to="/calendar">calendar</Link></li>
            <li><Link to="/members">members</Link></li>
          </ul>
        </nav>
        { localStorage.getItem("id") ? logoutLink() : loginLink() }
      </section>
    </div>
  );
};

export default NavigationBar;