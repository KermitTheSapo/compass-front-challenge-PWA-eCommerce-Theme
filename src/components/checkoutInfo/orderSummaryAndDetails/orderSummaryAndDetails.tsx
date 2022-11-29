import SummaryProduct from "../summaryProduct/summaryProduct"
import * as S from "./orderSummaryAndDetailsStyle"

export default function OrderSummaryAndDetails() {
    return (
        <S.SummaryAndDetails>
            <S.OrderSummaryDiv>
                <S.OrderSummaryHeader>
                    <S.OrderSummaryTitle>Order Summary</S.OrderSummaryTitle>
                </S.OrderSummaryHeader>
                <S.Separator></S.Separator>
                <S.OrderSummaryContent>
                    <SummaryProduct />
                    <SummaryProduct />
                </S.OrderSummaryContent>
            </S.OrderSummaryDiv>
            <S.OrderDetailsDiv>
                <S.OrderDetailsHeader>
                    <S.OrderDetailsTitle>Order Details</S.OrderDetailsTitle>
                </S.OrderDetailsHeader>
                <S.Separator></S.Separator>
                <S.OrderDetailsContent>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Sub Total</S.OrderLabel>
                        <S.OrderPrice>$119.69</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Discount</S.OrderLabel>
                        <S.OrderPrice>-$13.40</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderLabel>Delivery Fee</S.OrderLabel>
                        <S.OrderPrice>-$0.00</S.OrderPrice>
                    </S.OrderDetailsList>
                    <S.OrderDetailsList>
                        <S.OrderResult>Delivery Fee</S.OrderResult>
                        <S.OrderResult>-$0.00</S.OrderResult>
                    </S.OrderDetailsList>
                </S.OrderDetailsContent>
            </S.OrderDetailsDiv>
        </S.SummaryAndDetails>
    )
}