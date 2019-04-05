import styled from 'styled-components';

export const CardStyle = styled.div `
    
    ._card{
        padding:10px;
        // background:red;
        margin-bottom:50px;
        padding-left:0;
        ._title{
                // color: white;
                text-transform: uppercase;
                font-size: 23px;
                font-weight: 800;
                letter-spacing: 0.3px;
                position:relative;
                line-height:28px;
                margin-bottom: 20px;

                &:after{
                  content: "";
                  position: absolute;
                  left: 1px;
                  height: 4px;
                  width: 60px;
                  background: #1f64ff;
                  bottom: -12px;
              }
              
              }
              ._para{
                  margin-top:22px;
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 500;
                    }
`;