import React from 'react';
import { useEffect } from 'react';
import { Route, Routes} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Home from './home/Home';
import UserHome from './home/UserHome';
import Login from '../components/Login';
import Join from '../components/Join';
import Workout from './home/Workout';
import Learning from './home/Learning';
import Calendar from './home/Calendar';
import Members from './home/Members';
import 'styles/common.scss';

const MainPage = () => {
  useEffect(() => {
  }, []);
   
  return (
    <div className="main">
      <section>
        <NavigationBar />
      </section>
      <section>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/join" exact={true} element={<Join />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/user-home" exact={true} element={<UserHome />} />
          <Route path="/workout" exact={true} element={<Workout />} />
          <Route path="/learning" exact={true} element={<Learning />} />
          <Route path="/calendar" exact={true} element={<Calendar />} />
          <Route path="/members" exact={true} element={<Members />} />
        </Routes>
      </section>
    </div>
  );
};

export default MainPage;