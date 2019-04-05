import styled from "styled-components";


export const FooterThemeStyle = styled.div`
         background-image: linear-gradient(360deg, #000845, #000001 77%);
         padding: 4rem 0;
       `;
export const CopyrightTextStyle = styled.div`
         p {
           color: white;
           font-size: 20px !important;
           @media (max-width: 767px) {
             text-align: center;
            //  padding: 15px 0px;
           }
         }
       `;
export const FooterLogoStyle = styled.div`
img{
        display:block;
        margin:auto;
        

    }
       `;
export const SocialLinkStyle = styled.div`
        ul{
            text-align:right;
            padding:0;
            li{
                color:white;
                display:inline-block;
                i{
                    font-size:30px;
                    margin:5px 6px;
                }
            }
            @media(max-width:767px){
                text-align:center;
                padding: 15px 0px;
            }
        }
       `;
