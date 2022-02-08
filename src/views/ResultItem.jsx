import styled from "styled-components";
import freeShip from "../assets/ic_shipping@2x.png.png.png";
import { Link } from 'react-router-dom';

const ItemCard = styled.section`
    background: #fff;
    width:67%;
    margin-top: 1px;
    margin-left: auto;
    margin-right:auto;
    display: block;
    border-radius: 5px;
    -webkit-box-shadow: 0px 1px 2px -1px #d3d3d3bd;
    -moz-box-shadow:  0px 1px 2px -1px #d3d3d3bd;
    box-shadow:  0px 1px 2px -1px #d3d3d3bd;
`;
const Title = styled.h4`

`;
const Price = styled.span`

`;
const Image = styled.img`
    width:200px;
    height: 150px;
    margin:5px;
`;
const Freeship = styled.img`

`;
const Condition = styled.span`

`;
const MenuL = styled(Link)`                           //Estilo link
    text-decoration:none;
`;
export default function ResultItem(item) {

    return (
        <ItemCard key={item.id}>
            <MenuL to={`/items/${item.id}`}>
                <Image src={ item.picture}/>
                <Title>{item.title}</Title>
                {item.free_shipping?<Freeship src={freeShip} />:<></>}
                <Price>{ item.price.amount}</Price>
                <Condition>{ item.condition}</Condition>
            </MenuL>
        </ItemCard>
    )
}