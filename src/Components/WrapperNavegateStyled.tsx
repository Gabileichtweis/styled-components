import React from 'react';
import styled from 'styled-components';

const WrapperNavegateStyled = styled.div`
    padding: 0 150px;

    nav{
        
        ul{
            display: flex;
            
            li{
                padding: 10px;
                list-style-type: none;
                font-weight: bold;

                a{
                    text-decoration: none;                    
                    color: #040483;                    
                }
            }
        }
    }

    svg{
        font-size: 28px;
        color: #040483;
        margin: 10px;
    }
`

export default WrapperNavegateStyled;