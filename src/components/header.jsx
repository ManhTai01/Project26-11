import React from 'react';
import 'antd/dist/antd.css';
import '../blocks/header.css';
import {
    BellOutlined,
  FrownOutlined,
  ExportOutlined,
  FileUnknownOutlined,
UserOutlined    
} from '@ant-design/icons';
import {  Button,Dropdown,Menu } from 'antd';

class Header extends React.Component {
  render() {
    return (
        <div className="header">
            <div className="content">
                <div className="image">
                    <img src="/images/upscale.PNG" alt="Icon ESP" />
                </div>
                <div className="right-content">
                    <input className="ipnut" maxlength="500" placeholder="What can I help you to find?" type="text" class="form-control" aria-invalid="false" value=""></input>
                    <div className="icon-header">
                      <BellOutlined />  
            </div>
                    <Dropdown
          overlay={() => (
            <Menu style={{ width: 170 }}>
              <Menu.Item className="menu-item">
                <UserOutlined />
                      My Profile
                  </Menu.Item>
               <Menu.Item className="menu-item">
                <FileUnknownOutlined />
                      Help
              </Menu.Item>
                  <Menu.Item className="menu-item">
                    
                      <ExportOutlined />
                      Log Out               
              </Menu.Item>
            </Menu>
          )}
        >
         <div className="icon-header">
                          <div className="icon-header">
                      <FrownOutlined />
                    </div>
                        
                    </div>
        </Dropdown>
        </div>
      </div>
            
    </div>
    );
  }
}

export default Header;