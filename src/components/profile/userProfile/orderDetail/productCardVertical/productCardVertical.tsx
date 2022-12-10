import * as S from "./productCardVerticalStyle"

type Props = {
    id: string;
    name: string;
    paragraph: string;
    price: number;
    image: string;
    quantity: number;
}

export default function ProductCardVertical({ name, paragraph, price, image, quantity }: Props) {
    return (
        <S.ProductCardVerticalContainer>
            <S.ProductNameDiv>
                <S.ProductImg src={image} alt="product img" />
                <S.ProductNameInfo>
                    <S.ProductName>{name}</S.ProductName>
                    <S.ProductDescription>{paragraph}</S.ProductDescription>
                </S.ProductNameInfo>
            </S.ProductNameDiv>
            <S.ProductPriceInfo>
                <S.ProductValue>${price}</S.ProductValue>
                <S.ProductQuantity>{quantity}</S.ProductQuantity>
                <S.ProductSubTotal>${price}</S.ProductSubTotal>
            </S.ProductPriceInfo>
        </S.ProductCardVerticalContainer>
    )
}