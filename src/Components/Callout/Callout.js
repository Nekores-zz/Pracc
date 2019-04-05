import React, { Component } from 'react'
import {Col,Row, Button} from "antd";
import {CalloutStyle} from "./_style"


export class Callout extends Component {
  render() {
    return (
      <CalloutStyle>
        <Row type="flex" justify="center" align="middle">
          <Col xs={{ span:24}}  sm={{ span: 24}}  md={{ span: 10 }}  xl={{ span: 8 }} xxl={{span:6}}>
            <div className="_content">
              <h3 className="_title"> Ready to get started? </h3>
              <p className="_para">
                Sign up for the next generation of practice affairs right
                now.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }}  sm={{ span: 24 }}  md={{ span: 4 }}  xl={{ span: 4 }} xxl={{span:4}}>
            <div className="_button">
              <Button type="primary" size="large" shape="round">
                SIGN UP
              </Button>
            </div>
          </Col>
        </Row>
      </CalloutStyle>
    );
  }
}
