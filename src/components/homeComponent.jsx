import React from 'react';
import 'antd/dist/antd.css';
import '../blocks/home.css';
import { Button, Row, Col, Layout, Radio } from 'antd';
import {
  LeftCircleOutlined,
  RightCircleOutlined
} from '@ant-design/icons';
 const {  Header } = Layout;
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
              <div className="header-control">
                  <h1>HOME PAGE</h1>
              </div>
                  
          </Header>
     <Row gutter={16}>
              <Col className="gutter-row" span={18}>
          <div className="body">
          <div className="cell">
          <h3>Your Feed</h3>
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
              <h2>UNIQUE VIEW HISTORY</h2>
             
              <div className="images-control">
                <div className="left-icon"><LeftCircleOutlined /></div>
                <img src="/images/charts.PNG" alt="" />
                <div className="right-icon"><RightCircleOutlined /> </div>
              </div>
            </div>
                 <div className="banners">
                <img src="/images/banners.PNG" alt="" />
            </div>
                 <div className="left">
                  <h2>banner 3</h2>
                </div>
              </Col>
        </Row>  
     </Layout>
    );
  }
}

export default Home;