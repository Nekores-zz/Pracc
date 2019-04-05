import React, { Component } from 'react';
import {Layout, Row, Col} from "antd";
import HeaderTheme from "../Sections/HeaderTheme/HeaderTheme";
import BodyTheme from "../Sections/BodyTheme/BodyTheme";
import FooterTheme from "../Sections/FooterTheme/FooterTheme";

// Style Imported
import {AppStyle, LayoutCustom} from './_style'; 

// Layout
const { Header, Footer, Content } = Layout;

// Component Definition
class App extends Component {
  render() {
    return (
      <LayoutCustom>
        <Layout>
          <HeaderTheme />
          <Content>
            <AppStyle className="App">
              <BodyTheme />
            </AppStyle>
          </Content>
          <FooterTheme>
            <h1> FooterTheme</h1>
          </FooterTheme>
        </Layout>
      </LayoutCustom>
    );
  }
}

export default App;
