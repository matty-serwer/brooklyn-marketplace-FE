import React from "react";

// components
import Navbar from "./../common/Navbar";
import Items from "./Items";

import { Typography } from 'antd';


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
      <Items />
    </div>
  );
};

export default Homepage;
