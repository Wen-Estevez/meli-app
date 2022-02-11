import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { searchId } from "../services/endpoints";

const Container = styled.div`
    background: #D5D5D3;
    height:100%;
    padding:2% 0;
`;

const Section = styled.section`
    float:right;
    width: 30%;
`;

const Card = styled.div`
    background: white;
    margin: 0 auto;
    width:57%;
    padding:5%;

`;

const Image = styled.img`
    height:auto;
    width:70%;
`;

const Title = styled.h2`

`;

const Price = styled.span`
    font-size:2rem;
`;

const Decimals = styled.span`
    margin-top: 2.5px;
    margin-left: 2px;
    position:absolute;
`;

const Info = styled.span`

`;

const BuyButton = styled.button`
    display:block;
    background:#3481fe;
    border:none;
    color:white;
    padding:0.5rem 4rem;
    margin:0 auto;
    margin-top: 10%;
    width: 100%;
`;

const DescTitle = styled.h4`
    font-size: 25px;
    color: #555555;
`;

const DescText = styled.span`
    color: #555555;
`;
const DescContainer = styled.div`
    width: 70%;
    text-align: justify;
`;


export default function ItemDetail() {
    const id=useParams().id;                        //Guarda el id de la barra de direcciones
    const [item,setItem]=useState();              //Estado Guarda la informacion del item
    console.log(item)
    async function getItem() {
        setItem(await searchId(id));
    };
    
    useEffect(() => getItem(),// eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return (
        <Container>
            <Card>
                <Image src={item?.item.picture} />
                <Section>
                    <Info>{item?.item.condition}</Info>
                    <Title>{item?.item.title}</Title>
                    <Price>$ {item?.item.price.amount}</Price>
                    <Decimals>{item?.item.price.decimals}</Decimals>
                    <BuyButton>Comprar</BuyButton>
                </Section>
                <DescTitle>Descripción del producto</DescTitle>
                <DescContainer>
                    <DescText>{item?.item.description}</DescText>
                </DescContainer>
            </Card>
        </Container>
    )
}
