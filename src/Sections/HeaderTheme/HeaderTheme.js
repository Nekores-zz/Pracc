import React, { Component } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import CarouselTheme from "../../Components/CarouselTheme/CarouselTheme";


export default class HeaderTheme extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CarouselTheme />
      </div>
    );
  }
}
