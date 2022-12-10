import * as S from "./wishlistErrorStyle"
import Img from "@/assets/imgs/wishlist/art.svg"
export default function WishlistError() {
    return (
        <S.WishlistErrorContainer>
            <S.Img src={Img} alt="image of a heart with a question mark in the middle" />
            <S.ErrorTitle>Well...</S.ErrorTitle>
            <S.ErrorParagraph>It seems you have not added any products to for wishlist. </S.ErrorParagraph>
            <S.StartBtn>Start Shopping</S.StartBtn>
        </S.WishlistErrorContainer>
    )
}