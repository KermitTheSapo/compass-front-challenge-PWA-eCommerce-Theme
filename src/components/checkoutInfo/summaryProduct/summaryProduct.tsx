import * as S from "./summaryProductStyle"
import img from "@/assets/imgs/checkoutInfo/image.png"
export default function SummaryProduct() {
    return (
        <S.ProductContainer>
            <S.ImgProduct src={img} alt="" />
            <S.ProductContent>
                <S.ProductName>Coach</S.ProductName>
                <S.ProductDescription>Leather Coach Bag</S.ProductDescription>
                <S.ProductQuantity>Qty- 1</S.ProductQuantity>
            </S.ProductContent>
        </S.ProductContainer>
    )
}