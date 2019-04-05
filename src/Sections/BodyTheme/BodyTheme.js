import React, { Component } from 'react';
import { BodyThemeStyle } from "./_style";
import { Col, Row } from 'antd';

import leftImg from "../../Images/left.png";
import rightImg from "../../Images/right.png";
import {Card} from "../../Components/Card/Card";
import {Callout} from "../../Components/Callout/Callout";


// Icons
import Icon1 from "../../Images/Icons/1.png";
import Icon2 from "../../Images/Icons/2.png";
import Icon3 from "../../Images/Icons/3.png";
import Icon4 from "../../Images/Icons/4.png";

// component definition
export default class BodyTheme extends Component {
  constructor(props){
    super(props);
    this.state = {
      card1: {
        Icon: Icon1,
        Title: "No Double booking Anymore",
        Para: "You have been in many groups with several members of your team and sometimes it just happens. You as well as a teammate booked something for the same time. We got you covered. Everything runs through teams joining groups here what",
      },
      card2: {
        Icon: Icon2,
        Title: "Automatic Request Adaptation ",
        Para: "ou already booked something for a certain date and time but are still receiving offers here and there in different groups because you were too lazy to update every single post in every group. We are taking care of that for you and automatically update your requests so others cant send any new offers for times where you already have practicing matches scheduled.",
      },
      card3: {
        Icon: Icon3,
        Title: "Appropriate Filter Options ",
        Para: "All that scrolling and checking every single group and post comes to an end. We equip you with filters for dates, times, maps and much more. Stop wasting time on a task that can be done way easier, use us, we are ",
      },
      card4: {
        Icon: Icon4,
        Title: "Automatic Notifications ",
        Para: "We are automatically notifying you via email or our own app according to your notification settings about nearly every step on pracc.com regarding the booking process. ",
      }
    };
  }
  render() {
    return (
      <BodyThemeStyle>
        <div id="_sectionOne">
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
            >
              <div className="_Box _left">
                <h2 className="_title"> Old way</h2>
                <img src={leftImg} />
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
            >
              <div className="_Box _right">
                <h2 className="_title"> New way</h2>
                <img src={rightImg} />
              </div>
            </Col>
          </Row>
        </div>
        <div id="_sectionTwo">
          <Row type="flex" justify="center" align="top">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
            >
              <Card
                icon={this.state.card1.Icon}
                para={this.state.card1.Para}
                title={this.state.card1.Title}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
            >
              <Card
                icon={this.state.card2.Icon}
                para={this.state.card2.Para}
                title={this.state.card2.Title}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="top">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
            >
              <Card
                icon={this.state.card3.Icon}
                para={this.state.card3.Para}
                title={this.state.card3.Title}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 9 }}
            >
              <Card
                icon={this.state.card4.Icon}
                para={this.state.card4.Para}
                title={this.state.card4.Title}
              />
            </Col>
          </Row>
        </div>
        <div id="_sectionThree">
          <Row>
            <Col>
              <Callout />
            </Col>
          </Row>
        </div>
      </BodyThemeStyle>
    );
  }
}
