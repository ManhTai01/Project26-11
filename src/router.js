import React from "react";
import { Switch, Route,} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./components/homeComponent"
import { Layout } from "antd";
import Contents from "./components/contents";
import Favorite from "./components/favorite";
import SalesTeam from './components/saleteam';
import Upgrade from './components/upgrade';
import Product from './components/product';


const { Content } = Layout;

class Routes extends React.Component {
    render() {
        return (
          <Layout>
            <Sidebar />
            <Layout>
              <Header />
              <Content>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/product" component={Product} />
                  <Route exact path="/content" component={Contents} />
                  <Route exact path="/salesteam" component={SalesTeam} />
                  <Route exact path="/favorite" component={Favorite} />
                  <Route exact path="/upgrade" component={Upgrade} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        );
    }


}    
export default Routes;