import * as S from "./cardOrderStyle"
import img from "@/assets/imgs/itemsOrdered/img.png"

export default function CardOrder() {
    return (
        <S.CardOrderContainer>
            <S.ImgProduct src={img} alt="image of a product" />
            <S.DivContent>
                <S.ProductTitle>Coach</S.ProductTitle>
                <S.ProductDescription>Leather Coach Bag</S.ProductDescription>
                <S.ProductPrice>$54.69</S.ProductPrice>
                <S.ProductQuantity>Qty- 1</S.ProductQuantity>
                <S.AddToBagBtn>Add to bag</S.AddToBagBtn>
            </S.DivContent>
        </S.CardOrderContainer>
    )
}