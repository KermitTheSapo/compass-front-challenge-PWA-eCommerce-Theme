import * as S from "./productStyle"
import img from "@/assets/imgs/myCart/image.png"
export default function Product() {
    return (
        <S.ProductContainer>
            <S.ImgProduct src={img} alt="" />
            <S.ProductContent>
                <S.ProductInformation>
                    <S.ProductName>Coach</S.ProductName>
                    <S.ProductValues>
                        <S.ProductPrice>$54.69</S.ProductPrice>
                        <S.ProductQuantity>1</S.ProductQuantity>
                        <S.ProductSubtotal>$54.69</S.ProductSubtotal>
                    </S.ProductValues>
                </S.ProductInformation>
                <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                <S.ProductQuantity>Qty- 1</S.ProductQuantity>
                <S.ButtonsAction>
                    <S.WishlistParagraph>Move to Wishlist</S.WishlistParagraph>
                    <S.RemoveParagraph>Remove</S.RemoveParagraph>
                </S.ButtonsAction>
            </S.ProductContent>
        </S.ProductContainer>
    )
}