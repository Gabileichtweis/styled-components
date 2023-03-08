import React from 'react';
import WrapperIconStyled from './WrapperIconStyled';

interface IconsProps {
    icon: React.ReactNode;
    titulo: string;
    descricao: string;
}

const Icons: React.FC<IconsProps> = ({icon, descricao, titulo}) => {
    return (
        <WrapperIconStyled>
            {icon}
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </WrapperIconStyled>
    )
};

export default Icons;