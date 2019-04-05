import styled from "styled-components";

import img1 from "../../Images/home.jpg";

export const CarouselStyle = styled.div`
    background-image: url(${img1});
    animation: marquee 30s infinite linear;
    -webkit-animation: marquee 40s infinite linear;
    // background-repeat: no-repeat;
    background-size: cover;
    position:relative;
    @keyframes marquee {
  0% {
    background-position: 0;
  }

  100% {
    background-position: -1190px;
  }
}
    .alphaGradient{
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(360deg, rgba(32, 149, 243, 0.69), rgba(11, 11, 11, 0) 70.17%);
        bottom: 0;
        left: 0;
    }
    .alphaColor{
        padding:50px;
        height:100%;
        width:100%
        background:rgba(0, 0, 60, 0.48);
             
    }
    .ant-carousel .slick-slide {
        text-align: center;
        overflow: hidden;
        height:60vh;
        display:table !important;
        div{
            display: table-cell;
            vertical-align:middle;
        }
    }

    .ant-carousel .slick-slide h2 {
        font-size: 35px;
        text-transform:uppercase;
        color: white;
        font-weight: 800;
    }
       `;
