import React from "react";

// components
import Navbar from "./../common/Navbar";
import MainMenu from "./MainMenu";
import Items from "./Items";

import { Typography } from "antd";

import "antd/dist/antd.css";
import "./Homepage.css";

const { Title } = Typography;

const Homepage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <div className='banner'>
        <h1>Brooklyn Marketplace</h1>
      </div>
      <div className='body'>
        <MainMenu />
        <div className='items-container'>
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
