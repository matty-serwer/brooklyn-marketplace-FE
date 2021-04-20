import { Layout, Tabs, Button, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  RocketOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Navbar.css";

const { TabPane } = Tabs;
const { Header } = Layout;

const merchantMenu = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>
      <Link to='/login'>Login</Link>
    </Menu.Item>
    <Menu.Item icon={<RocketOutlined />}>
    <Link to='/register'>Register</Link>
    </Menu.Item>
  </Menu>
);

export const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <Header className='header'> */}
      <h2 className='logo'>Brooklyn Marketplace</h2>
      <div className='navButtons'>
        {/* <Tabs defaultActiveKey='1' onChange={navigateTo}>
          <TabPane tab='Tab 1' key='1'>
          </TabPane>
          <TabPane tab='Tab 2' key='2'>
          </TabPane>
          <TabPane tab='Tab 3' key='3'>
          </TabPane>
        </Tabs> */}
        <Button className='navButton'>Link 1</Button>
        <Button className='navButton'>Link 2</Button>
        <Dropdown overlay={merchantMenu}>
          <Button className='merchButton' type='primary'>
            Merchants
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
