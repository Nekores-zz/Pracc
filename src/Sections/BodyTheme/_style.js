import styled from "styled-components";

import img1 from "../../Images/home.jpg";

import borderRight from "../../Images/borderRight.png";

export const BodyThemeStyle = styled.div`
         #_sectionOne {
           //  background: red !important;
           background-image: linear-gradient(
             360deg,
             #000001,
             #000845 77%
           );
           padding: 3rem 0;
           padding-bottom: 4rem;
           img {
             // margin: auto;
             // display: block;
             max-width:100%;
             padding-right:3rem;
           }
           ._Box {
             padding-left: 5rem;
             ._title {
               color: white;
               text-transform: uppercase;
               font-size: 24px;
               font-weight: 600;
               letter-spacing: 0.3px;
               position: relative;
               margin-bottom: 50px;

               &:after {
                 content: "";
                 position: absolute;
                 left: 4px;
                 height: 4px;
                 width: 60px;
                 background: #1f64ff;
                 bottom: -7px;
                 @media (max-width: 991px) {
                   margin: auto;
                   display: block;
                   right: 0;
                 }
               }
             }
             margin-right: 40px;
           }
           ._Box._left {
             border-style: solid;
             border-width: 0px 2.5px 0px 0px;
             -moz-border-image: url(${borderRight}) 27 repeat;
             -webkit-border-image: url(${borderRight}) 27 repeat;
             -o-border-image: url(${borderRight}) 27 repeat;
             border-image: url(${borderRight}) 27 fill repeat;
           }
           ._Box {
             margin-top: 2.5rem;
             margin-bottom: 2.5rem;
             @media (max-width: 991px) {
               border: none !important;
               text-align: center;
             }
           }
         }

         #_sectionTwo {
           padding: 3rem 0rem;
           padding-bottom: 0rem;
           background: #f8f8f8;
         }
       `;
