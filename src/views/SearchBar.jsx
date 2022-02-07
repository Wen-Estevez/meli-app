import styled from "styled-components";
import { useState } from "react";
import { Link } from 'react-router-dom';

import logo from "../assets/Logo_ML@2x.png.png.png";

const BarContainer = styled.aside`
    background: #ffe600;
`;

const TextBar = styled.input`
    margin-top:1rem;
    margin-left: 10%;
    width: 60%;
    height:35px;
    border: none;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 2px -1px #242424bf;
    -moz-box-shadow:  0px 1px 2px -1px #242424bf;
    box-shadow:  0px 1px 2px -1px #242424bf;
    position: absolute;
`;

const SearchButton = styled.button`

`;

const LogoImage = styled.img`

`;

const MenuL = styled(Link)`                           //Estilo link
    text-decoration:none;
`

export default function SearchBar() {
    const [input, setInput] = useState("");
    
    return (
        <BarContainer>
            <LogoImage src={logo} ></LogoImage>
            <TextBar onChange={(e) => setInput(e.target.value)}></TextBar>
            <MenuL to={`/items?search=${input}`}>
                <SearchButton> Enviar</SearchButton>
            </MenuL>
        </BarContainer>
    )
}