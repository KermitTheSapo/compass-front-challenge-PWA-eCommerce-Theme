import * as S from "./productStyle"

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
}

export default function Product({ productTitle, productParagraph, productPrice, img }: Props) {
    return (
        <S.ProductContainer>
            <S.ImgProduct src={img} alt="" />
            <S.ProductContent>
                <S.ProductInformation>
                    <S.ProductName>{productTitle}</S.ProductName>
                    <S.ProductValues>
                        <S.ProductPrice>${productPrice}</S.ProductPrice>
                        <S.ProductQuantity>1</S.ProductQuantity>
                        <S.ProductSubtotal>${productPrice}</S.ProductSubtotal>
                    </S.ProductValues>
                </S.ProductInformation>
                <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                <S.ProductQuantity>Qty- 1</S.ProductQuantity>
                <S.ButtonsAction>
                    <S.WishlistParagraph>Move to Wishlist</S.WishlistParagraph>
                    <S.RemoveParagraph>Remove</S.RemoveParagraph>
                </S.ButtonsAction>
            </S.ProductContent>
        </S.ProductContainer>
    )
}