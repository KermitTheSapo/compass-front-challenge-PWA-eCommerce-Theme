import * as S from "./cardOrderStyle"

type Props = {
    image: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export default function CardOrder({image, name, description, price, quantity}: Props) {
    return (
        <S.CardOrderContainer>
            <S.ImgProduct src={image} alt="image of a product" />
            <S.DivContent>
                <S.ProductTitle>{name}</S.ProductTitle>
                <S.ProductDescription>{description}</S.ProductDescription>
                <S.ProductPrice>${price}</S.ProductPrice>
                <S.ProductQuantity>Qty- {quantity}</S.ProductQuantity>
                <S.AddToBagBtn>Add to bag</S.AddToBagBtn>
            </S.DivContent>
        </S.CardOrderContainer>
    )
}