import styled from "styled-components";

import freeShip from "../assets/ic_shipping@2x.png.png.png";

const ItemCard = styled.section`
    background: red;
`;
const Title = styled.h4`

`;
const Price = styled.span`

`;
const Image = styled.img`

`;
const Freeship = styled.img`

`;
const Condition = styled.span`

`;

export default function ResultItem(item) {

    return (
        <ItemCard key={item.id}>
            <Image src={ item.picture}/>
            <Title>{item.title}</Title>
            {item.free_shipping?<Freeship src={freeShip} />:<></>}
            <Price>{ item.price.amount}</Price>
            <Condition>{ item.condition}</Condition>
        </ItemCard>
    )
}