import styled from "styled-components";
import freeShip from "../assets/ic_shipping.png";
import { Link } from 'react-router-dom';

const ItemCard = styled.section`
    background: #fff;
    width:67%;
    margin-top: 1px;
    margin-left: auto;
    margin-right:auto;
    border-radius: 5px;
    -webkit-box-shadow: 0px 1px 2px -1px #d3d3d3bd;
    -moz-box-shadow:  0px 1px 2px -1px #d3d3d3bd;
    box-shadow:  0px 1px 2px -1px #d3d3d3bd;
`;
const Title = styled.h4`
    margin-left: 25%;
    color: #444444;
`;
const Price = styled.span`
    margin-left: 25%;
    color: #444444;
    margin-top: 5%;
    font-size:150%;
`;
const Image = styled.img`
    width:180px;
    height: 150px;
    margin: 2%;
    margin-top: -8%;
`;
const Freeship = styled.img`
    
`;
const Condition = styled.span`
    margin-left: 67%;
`;
const MenuL = styled(Link)`                           //Estilo link
    text-decoration:none;
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