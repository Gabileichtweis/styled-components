import React from 'react';
import styled from 'styled-components';

interface TitleStyledProps {
    fontSize: string; //18px  24px
    color?: string; // #3333  #5874
}

const TitleStyled = styled.h2<TitleStyledProps>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color ? props.color : 'inherit'};
`

export default TitleStyled;