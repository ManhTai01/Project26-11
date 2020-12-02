import React from 'react';
import 'antd/dist/antd.css';
import Head from './header';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  ArrowLeftOutlined,
  UserOutlined,
  HddOutlined ,
  DesktopOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';
import '../blocks/sidebar.css';
import { Link } from "react-router-dom";



const {  Header,Sider } = Layout;

class SlideBar extends React.Component {
    state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu  mode="inline" defaultSelectedKeys={['1']}>
             <Header  style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : ArrowLeftOutlined , {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
            <Menu.Item key="1" icon={<UserOutlined />}>
            <Link exact to="/">
            HOME
            </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<DesktopOutlined />}
          >
            <Link exact to="/product">
            PRODUCT
            </Link>
              
            </Menu.Item>
            <Menu.Item key="3" icon={<HddOutlined />}>
            <Link exact to="/content">CONTENT</Link>
            </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link exact to="/salesteam"> SALES TEAM</Link>
              
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              
              <Link exact to="/favorite">FAVORITES</Link>
            </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link exact to="/upgrade"></Link>
              UPGRADE
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default SlideBar;