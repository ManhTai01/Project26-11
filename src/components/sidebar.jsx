import React from 'react';
import 'antd/dist/antd.css';

import { Layout, Menu,Row,Col, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';



const { Header, Content, Sider } = Layout;

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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu  mode="inline" defaultSelectedKeys={['1']}>
             <Header  style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
            <Menu.Item key="1" icon={<UserOutlined />}>
              HOME
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              PRODUCT
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
             CONTENT
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
               SALES TEAM
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              FAVOURITES
            </Menu.Item>
            <Menu.Item key="6" icon={<UploadOutlined />}>
              UPGRADE
            </Menu.Item>
          </Menu>
        </Sider>
     
        <Layout className="site-layout">
             <Header  >
            <div className="content">
              <div >
                   <input className="ipnut" maxlength="500" placeholder="What can I help you to find?" type="text" class="form-control" aria-invalid="false" value=""></input>
              </div>
          </div>
            
          </Header>
          <Layout>
            <Header>
                  <h1>HOME PAGE</h1>
            </Header>
            <Row gutter={16}>
              <Col className="gutter-row" span={18}>
          <div className="body">
          <div className="cell">
          <h2>Your Feed</h2>
              <Button>All</Button>
              <Button>Internal</Button>
              <Button>News</Button>
                  </div>
                  <div className="cell"> <span>Noi dung 1</span></div>
                  <div className="cell"> <span>Noi dung 2</span></div>
                  <div className="cell"> <span>Noi dung 3</span></div>
                  <div className="cell"> <span>Noi dung 4</span></div>
                  <div className="cell"> <span>Noi dung 5</span></div>
                  <div className="cell"> <span>Noi dung 6</span></div>
                  <div className="cell"> <span>Noi dung 7</span></div>
                  <div className="cell"> <span>Noi dung 8</span></div>
                  </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="left">
                  baner1
                </div>
                 <div className="left">
                  baner1
                </div>
                 <div className="left">
                  baner1
                </div>
              </Col>
            </Row>        
          </Layout>
          </Layout>
      </Layout>
    );
  }
}

export default SlideBar;