import styled from "styled-components";
import freeShip from "../assets/ic_shipping.png";
import { Link } from 'react-router-dom';

const ItemCard = styled.section`
    display:grid;
    grid-template-columns:repeat(12, 1fr);
    grid-template-rows:repeat(4, 1fr);
    background: #fff;
    width:67%;
    margin-top: 1px;
    margin-left: auto;
    margin-right:auto;
    border-radius: 5px;
    box-shadow:  0px 1px 2px -1px #d3d3d3bd;
`;
const Title = styled.h4`
    margin-left: 25%;
    color: #757575;
    grid-column: 2/span 7;
    grid-row:3/span 2;
    margin-top: -5%;
`;
const Price = styled.span`
    margin-left: 25%;
    color: #757575;
    margin-top: 5%;
    font-size:150%;
    grid-column: 2/span 7;
    grid-row:1/span 2;
`;
const Image = styled.img`
    grid-column: 1/span 4;
    width:200px;
    height: 200px;
    margin: 5%;
    grid-row:1/span 4;
    border-radius: 5px;
`;
const Freeship = styled.img`
    
`;
const Condition = styled.span`
    margin-left: 67%;
    grid-column: 10/span 12;
    grid-row:1/span 4;
    margin-top: 15%;
    color: #6b6a6a;
`;
const MenuL = styled(Link)`                           //Estilo link
    text-decoration:none;
    display: contents;
`;
export default function ResultItem(item) {

    return (
        <ItemCard key={item.id}>
            <MenuL to={`/items/${item.id}`}>
                <Price>$ { item.price.amount} {item.free_shipping?<Freeship src={freeShip} />:<></>}</Price>
                <Title>{item.title}</Title>
                <Image src={ item.picture}/>                
                <Condition>{ item.condition}</Condition>
            </MenuL>
        </ItemCard>
    )
}
