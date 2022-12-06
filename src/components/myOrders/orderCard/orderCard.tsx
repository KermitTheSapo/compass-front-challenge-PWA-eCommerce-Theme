import * as S from "./orderCardStyle"
import arrowRight from "@/assets/imgs/my-orders/arrowRight.svg"


export default function OrderCard() {
    return (
        <S.OrderCardContainer>
            <S.CardContent>
                <S.DateText>September 5, 2020</S.DateText>
                <S.CodeText>#874522648</S.CodeText>
                <S.PriceText>$218.50</S.PriceText>
            </S.CardContent>
            <S.CardImg>
                <S.ImgArrow src={arrowRight} alt="" />
            </S.CardImg>
        </S.OrderCardContainer>
    )
}