import styled from "styled-components";
import { useState } from "react";
import { Link } from 'react-router-dom';

import logo from "../assets/Logo_ML@2x.png.png.png";

const BarContainer = styled.aside`

`;

const TextBar = styled.input`

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
                <SearchButton >Enviar</SearchButton>
            </MenuL>
        </BarContainer>
    )
}