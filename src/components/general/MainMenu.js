import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export const MainMenu = () => {
  const handleClick = (e) => {
    console.log("click", e);
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
          <Menu.Item key='1'>Option 1</Menu.Item>
          <Menu.Item key='2'>Option 2</Menu.Item>
          <Menu.Item key='3'>Option 3</Menu.Item>
          <Menu.Item key='4'>Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Markets'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MainMenu;
