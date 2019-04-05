import React, { Component } from "react";
import { Row, Col, Button} from "antd";
import { NavbarStyle, BrandStyle, LoginButtonStyle } from "./_style";
import logo from "../../Images/logo.png"

class Navbar extends Component {
  render() {
    return (
      <NavbarStyle>
        <div className="gradientCustom" />
        <Row type="flex" justify="center" align="middle">
          <Col xs={{ span: 12}}>
            <BrandStyle>
              <img src={logo} alt="logo" />
            </BrandStyle>
          </Col>
          <Col xs={{ span: 12}}>
            <LoginButtonStyle>
              <Button type="primary" shape="round">
                {" "}
                LOGIN
              </Button>
            </LoginButtonStyle>
          </Col>
        </Row>
      </NavbarStyle>
    );
  }
}

export default Navbar;
