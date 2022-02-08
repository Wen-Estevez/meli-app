import styled from "styled-components";
import { useState } from "react";
import { Link } from 'react-router-dom';

import logo from "../assets/Logo_ML@2x.png.png.png";
import search from "../assets/ic_Search.png";

const BarContainer = styled.aside`
    background: #ffe600;
`;

const TextBar = styled.input`
    margin:0.8rem;
    margin-left: 1%;
    width: 60%;
    height:30px;
    border: none;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 2px -1px #242424bf;
    -moz-box-shadow:  0px 1px 2px -1px #242424bf;
    box-shadow:  0px 1px 2px -1px #242424bf;
    position: absolute;
    &:focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    background: #f0efef url(${search}) no-repeat center;
    height:32px;
    width: 32px;
    border:none;
    position: absolute;
    margin-left: 61%;
    margin-top: 0.8em;
    border-radius: 3px;
    -webkit-box-shadow: 0px 1px 2px -1px #242424bf;
    -moz-box-shadow:  0px 1px 2px -1px #242424bf;
    box-shadow:  0px 1px 2px -1px #242424bf;
`;

const LogoImage = styled.img`
    height: 30px;
    margin-left: 15%;
    padding:0.8rem;
`;

const MenuL = styled(Link)`                           //Estilo link
    text-decoration:none;
`;

export default function SearchBar() {
    const [input, setInput] = useState("");
    
    return (
        <BarContainer>
            <LogoImage src={logo} ></LogoImage>
            <TextBar placeholder=" Nunca dejes de buscar" onChange={(e) => setInput(e.target.value)}></TextBar>
            <MenuL to={`/items?search=${input}`}>
                <SearchButton></SearchButton>
            </MenuL>
        </BarContainer>
    )
}