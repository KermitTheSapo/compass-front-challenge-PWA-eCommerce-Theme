import * as S from "./deliveryCardStyle"

import coach from "@/assets/imgs/order/coach.png"

export default function DeliveryCard() {
    return(
        <S.DeliveryCardContainer>
            <S.ImgProduct src={coach} alt="" />
            <S.ProductContent>
                <S.ProductDate>08 Dec</S.ProductDate>
                <S.ProductName>Coach</S.ProductName>
                <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
            </S.ProductContent>
        </S.DeliveryCardContainer>
    )
}