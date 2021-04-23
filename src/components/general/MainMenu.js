import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCategories, fetchLocations } from "./../../redux/actions/itemActions";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export const MainMenu = (props) => {
  useEffect(() => {
    props.fetchCategories();
    props.fetchLocations();
  }, []);

  console.log(props.locations);

  const handleClick = (e) => {
    console.log("click", e);
    console.log(e.key)
  };

  return (
    <div className='mainMenu'>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode='inline'
      >
        <SubMenu key='sub1' icon={<MailOutlined />} title='Categories'>
          {props.categories.length > 0 ? (
            props.categories.map((item) => (
              <Menu.Item key={item.id}>{item.name}</Menu.Item>
            ))
          ) : (
            <p>Loading Categories</p>
          )}
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Markets'>
        {props.locations.length > 0 ? (
            props.locations.map((item) => (
              <Menu.Item key={item.id + 100}>{item.name}</Menu.Item>
            ))
          ) : (
            <p>Loading Locations</p>
          )}
        </SubMenu>
      </Menu>
    </div>
  );
};

MainMenu.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  fetchLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    categories: state.inventory.categories,
    locations: state.inventory.locations
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchLocations })(MainMenu)
