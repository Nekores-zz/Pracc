import React, { Component } from 'react'
import { Carousel, Col, Row } from "antd";
import img1 from "../../Images/home.jpg"
import {CarouselStyle} from "./_style";


class CarouselTheme extends Component {
  render() {
    return (
      <CarouselStyle>
        <div className="alphaColor">
          <div className="alphaGradient" />
          <Row type="flex" justify="center" align="middle">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 14 }} xl={{span:10}}>
              <Carousel autoplay>
                <div>
                  <h2>
                    Why use pracc.com? <br /> All your practice affairs on
                    one single site
                  </h2>
                </div>
                <div>
                  <h2>
                    Why use pracc.com? <br /> All your practice affairs on
                    one single site
                  </h2>
                </div>
                <div>
                  <h2>
                    Why use pracc.com? <br /> All your practice affairs on
                    one single site
                  </h2>
                </div>
                <div>
                  <h2>
                    Why use pracc.com? <br /> All your practice affairs on
                    one single site
                  </h2>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
      </CarouselStyle>
    );
  }
}


export default CarouselTheme;