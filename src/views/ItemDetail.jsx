import { useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { searchId } from "../services/endpoints";

const Container = styled.div`

`;

const Image = styled.img`

`;

const Title = styled.h2`

`;

const Price = styled.span`

`;

const Decimals = styled.span`

`;

const Info = styled.span`

`;

const BuyButton = styled.button`

`;

const DescTitle = styled.h4`

`;

const DescText = styled.span`

`;

export default function ItemDetail() {
    const id=useParams().id;                        //Guarda el id de la barra de direcciones
    const [item,setItem]=useState();              //Estado Guarda la informacion del item
    console.log(item)
    async function getItem() {
        setItem(await searchId(id));
    };
    
    useEffect(() => getItem(), []);

    return (
        <Container>
            <Image src={item?.item.picture} />
            <Title>{item?.item.title}</Title>
            <Price>{item?.item.price.amount}</Price>
            <Decimals>{item?.item.price.decimals}</Decimals>
            <Info>{item?.item.condition}</Info>
            <BuyButton>Comprar</BuyButton>
            <DescTitle>Descripción del producto</DescTitle>
            <DescText>{item?.item.description}</DescText>
        </Container>
    )
}
