import React, { Component } from 'react';
import {Col, Row} from "antd";
import {CardStyle} from './_style';





export class Card extends Component {
  render() {
    return (
      <CardStyle>
        <Row>
          <Col>
            <div className="_card">
              <Row>
                <Col xs={{ span: 4 }} sm={{span:4}} md={{span:6}} xl={{span:4}}>
                  <img src={this.props.icon} />
                </Col>
                <Col xs={{ span: 20 }} sm={{span:20}} md={{span:18}} xl={{span:20}}>
                  <h3 className="_title">{this.props.title} </h3>
                  <p className="_para">{this.props.para}</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </CardStyle>
    );
  }
}

