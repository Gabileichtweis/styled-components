import React from 'react';
import routes from '../Config/Routes';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import WrapperFooterStyled from './WrapperFooterStyled';
import WrapperNavegateStyled from './WrapperNavegateStyled';

const Footer: React.FC = () => {
    return(
        <WrapperFooterStyled>
            <WrapperNavegateStyled>
                <nav>
                    <ul>
                        {routes.map((route,index) => {
                            return (
                                <li key={index}>
                                    <Link to={route.url}>{route.label}</Link>
                                </li>
                            );
                        })};
                    </ul>
                </nav>
                <small>
                    &copy; Your Website 2023. All Rights Reserved.
                </small>
            </WrapperNavegateStyled>
            
            <WrapperNavegateStyled>
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
            </WrapperNavegateStyled>
        </WrapperFooterStyled>
    )
};

export default Footer;