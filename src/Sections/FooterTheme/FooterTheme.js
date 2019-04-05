import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import {
  FooterThemeStyle,
  CopyrightTextStyle,
  FooterLogoStyle,
  SocialLinkStyle
} from "./_style";

import FooterLogo from "../../Images/footerLogo.png";
export default class FooterTheme extends Component {
  render() {
    return (
      <FooterThemeStyle>
        <Row>
          <Col span={22} offset={1}>
            <Row type="flex" justify="space-around" align="middle">
              <Col
                xs={{ span: 24, order: 3 }}
                sm={{ span: 24, order:3 }}
                md={{ span: 7, order:1}}
              >
                <CopyrightTextStyle>
                  <p>
                    Privacy Policy | Terms of Service <br />© pracc.com 2019
                  </p>
                </CopyrightTextStyle>
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 24, order:1 }}
                md={{ span: 7, order:2}}
              >
                <FooterLogoStyle>
                  <img src={FooterLogo} />
                </FooterLogoStyle>
              </Col>
              <Col xs={{ span: 24, order:2}} sm={{ span: 24 }} md={{ span: 7, order:3}}>
                <SocialLinkStyle>
                  <ul>
                    <li>
                      <Icon type="facebook" theme="filled" />
                    </li>
                    <li>
                      <Icon type="youtube" theme="filled" />
                    </li>
                    <li>
                      <Icon type="twitter" />
                    </li>
                    <li>
                      <Icon type="instagram" theme="filled" />
                    </li>
                    <li>
                      <Icon type="google-plus" />
                    </li>
                  </ul>
                </SocialLinkStyle>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterThemeStyle>
    );
  }
}
