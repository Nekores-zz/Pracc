import styled from "styled-components";

export const NavbarStyle = styled.div`
         position: relative;
         background: #0b0b0b;
         padding: 8px 5rem;
         .gradientCustom {
           position: absolute;
           height: 100%;
           width: 100%;
           background-image: radial-gradient(#1f64fe, #0b0b0b 70.59%);
           top: -38px;
           left: 0;
           opacity: 9.6;
         }
       `;

export const BrandStyle = styled.div`
  h1 {
    color: white;
    margin: 0;
  }
`;

export const LoginButtonStyle = styled.div`
         display: block;
         text-align: right;
         button {
           height: 40px;
           padding: 0 40px;
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
         }
       `;

// export default NavbarStyle;
