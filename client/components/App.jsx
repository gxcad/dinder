import React, { Component, useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import MainContainer from './MainContainer.jsx';
import axios from 'axios';
import key from '../../config/keys';
import Login from './Loginpage.jsx';
import Signup from './Signup.jsx';
import { Redirect } from "react-router-dom";

import Dashboard from './Dashboard.jsx';
import cookie from "cookie";
let MAX_SIZE = 0;

const App = props => {
  const [sidebar, setSidebar] = useState(false);
  const [dance, setDance] = useState(false);
  const [visited, setVisited] = useState({});
  const [play, setPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const audio = new Audio('https://iringtone.net/rington/file?id=8454&type=sound&name=mp3');

  useEffect(() => {
    if (play) audio.play();
    else audio.pause();
  }, [play]);

  // function invokes when the next button is clicked in MainContainer
  const moveNext = () => { // this brings new card
    let visited = Object.assign(visited);
    visited[currentIndex] = true;

    setCurrentIndex(getRandomNum(MAX_SIZE));
    // if currentIndex is already visited get another one
    while (visited[currentIndex]) {
      setCurrentIndex(getRandomNum(MAX_SIZE));
    }
    setVisited(visited);
    setFetchingDetails(false);
  };

  const cookies = cookie.parse(document.cookie);
  console.log(cookies);

  return cookies.ssid ? (
    <div className={`container`}>
      <Sidebar
        isSidebarOpen={sidebar}
        toggleSidebar={() => setSidebar(!sidebar)}
        dance={dance}
        secret={() => setDance(!dance)}
        pressPlay={setPlay}
      />
      <Dashboard />
      {/*<MainContainer*/}
      {/*  moveNext={moveNext}*/}
      {/*/>*/}
    </div>) : <Redirect to={'/login'} />;
};

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
};

export default App;
