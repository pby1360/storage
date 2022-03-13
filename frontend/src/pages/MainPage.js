import React from 'react';
import { useEffect } from 'react';
import { Route, Routes} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Home from './home/Home';
import UserHome from './home/UserHome';
import Login from '../components/Login';
import Join from '../components/Join';

const MainPage = () => {
  useEffect(() => {
  }, []);
   
  return (
    <div>
      <section>
        <NavigationBar />
      </section>
      <section>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/join" exact={true} element={<Join />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/user-home" exact={true} element={<UserHome />} />
        </Routes>
      </section>
    </div>
  );
};

export default MainPage;