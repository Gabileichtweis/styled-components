import React from 'react';
import BoxStyled from './BoxStyled';
import TitleStyled from './TitleStyled';
import WrapperContentTextStyled from './WrapperContentTextStyled';

interface ContentProps {
    title: string;
    description: string;
    srcImage: string;
    altImage?: string;
    rowDirection?: 'row-reverse' | 'row';
}

const Content: React.FC<ContentProps> = ({title, description, srcImage, altImage, rowDirection}) =>{
    return (
        <BoxStyled widthSize='100%' heightSize='min-contet' rowDirection={rowDirection}>
            <WrapperContentTextStyled>
                <TitleStyled fontSize='2rem'>
                    {title}
                </TitleStyled>
                <p>
                    {description}
                </p>
            </WrapperContentTextStyled>
            <figure>
                <img src={srcImage} alt={altImage ?? 'Imagem qualquer'} />
            </figure>
        </BoxStyled>
    )
};

export default Content;