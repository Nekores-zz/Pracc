import styled from "styled-components";

export const CalloutStyle = styled.div`
         //  background: green;
         background-image: linear-gradient(68deg, #171717, #1c1c1c);
         padding-bottom: 50px;
         ._button {
           button {
             height: 55px;
             padding: 0 80px;
             font-size: 18px;
             border-radius: 40px;
             background-image: linear-gradient(
               68deg,
               #36adbb,
               #1f64ff 90%
             );
             border: none;
             font-weight: 700;
             letter-spacing: 0.2px;
             span {
               text-transform: upppercase;
             }
             @media(max-width:767px){
               margin:auto;
               text-align:center;
               display:block
             }
           }
         }
         ._content {
           width: fit-content;
           margin: auto;
           margin-right: 0;
           padding: 50px;

           ._title {
             text-transform: uppercase;
             font-size: 23px;
             font-weight: 800;
             letter-spacing: 0.3px;
             position: relative;
             line-height: 28px;
             margin-bottom: 20px;
             color: white;
             margin-bottom: 0;
           }

           ._para {
             margin-bottom: 0;
             font-size: 16px;
             line-height: 26px;
             font-weight: 500;
             color: white;
           }
           @media (max-width: 1199px) {
             margin: 1px;
           }
           @media (max-width: 767px) {
             margin: auto;
             text-align: center;
           }
         }
       `;