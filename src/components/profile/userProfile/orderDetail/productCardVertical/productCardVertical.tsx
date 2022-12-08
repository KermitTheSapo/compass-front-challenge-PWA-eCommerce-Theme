import * as S from "./productCardVerticalStyle"

export default function ProductCardVertical() {
    return (
        <S.ProductCardVerticalContainer>
            <S.ProductNameDiv>
                <S.ProductImg src="" alt="" />
                <S.ProductNameInfo>
                    <S.ProductName>Coach</S.ProductName>
                    <S.ProductDescription>Leather Coach Bag</S.ProductDescription>
                </S.ProductNameInfo>
            </S.ProductNameDiv>
            <S.ProductPriceInfo>
                <S.ProductValue>$54.69</S.ProductValue>
                <S.ProductQuantity>2</S.ProductQuantity>
                <S.ProductSubTotal>$109.38</S.ProductSubTotal>
            </S.ProductPriceInfo>
        </S.ProductCardVerticalContainer>
    )
}