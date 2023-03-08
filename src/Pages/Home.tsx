import React from 'react';
import Banner from '../Components/BannerStyled';
import Icons from '../Components/Icons';
import { BsAlarmFill, } from "react-icons/bs";
import BoxStyled from '../Components/BoxStyled';
import TitleStyled from '../Components/TitleStyled';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  return (
    <React.Fragment>
        <Banner height='60vh'>
            <TitleStyled fontSize='5rem'>Growdev</TitleStyled>
        </Banner>

        <BoxStyled>
            <Icons 
                icon={<BsAlarmFill />}
                titulo='Somente para desktop'
                descricao='Vamos aprender, como utilizar um framework'
            />

            <Icons 
                icon={<BsAlarmFill />}
                titulo='Criado com componentes'
                descricao='Utilizando o Styled Components'
            />

            <Icons 
                icon={<BsAlarmFill />}
                titulo='Fácil aproveitamento'
                descricao='Estamos no caminho'
            />
        </BoxStyled>

        <Content title='Titulo 1' description='Bla Bla Bla' srcImage='./assets/images/img1card.jpg'/>

        <Content title='Titulo 2' description='Bla Bla Bla' srcImage='./assets/images/img2card.jpg' rowDirection='row-reverse'/>

        <Content title='Titulo 3' description='Bla Bla Bla' srcImage='./assets/images/img3card.jpg'/>

        <Banner height='40vh'>
            <TitleStyled fontSize='2rem'>Contato</TitleStyled>
        </Banner>

        <Footer/>
    </React.Fragment>
  );
};

export default Home;
