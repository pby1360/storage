import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styles/components/NavigationBar.scss';
import Auth from 'components/AuthenticationService';
// import { Button } from '@mui/material';

const NavigationBar = () => {

  const loginLink = () => {
    return (
      <section className="navigation-login">
        <Link to="/login">로그인</Link>
        <Link to="/join">회원가입</Link>
      </section>
    )
  }

  const logoutLink = () => {
    return (
      <section className="navigation-login">
        <button className="logout" onClick={logout}>로그아웃</button>
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
          </ul>
        </nav>
        { localStorage.getItem("id") ? logoutLink() : loginLink() }
      </section>
    </div>
  );
};

export default NavigationBar;