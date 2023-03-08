import Recat from 'react';
import styled from 'styled-components';

interface BoxStyledProps {
    widthSize?: string;
    heightSize?: string;
    rowDirection?: 'row-reverse' | 'row';
}

const BoxStyled = styled.div<BoxStyledProps>`
    display: flex;
    flex-direction: ${(props) => props.rowDirection ?? 'row'};
    width: ${(props) => props.widthSize ?? '100vw'};
    height: ${(props) => props.heightSize ?? '40vw'};
    align-items: center;
    justify-content: space-evenly;

    figure{
        width: 50%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
        }
    }
`

export default BoxStyled;