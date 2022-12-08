import * as S from "./orderDetailsStyle"

export default function OrderDetails() {
    return (
        <S.OrderDetailsContainer>
            <S.OrderTitle>Order Details</S.OrderTitle>
            <S.OrderSummary>
                <S.OrderLabel>Sub Total</S.OrderLabel>
                <S.OrderLabel>$119.69</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabel>Discount</S.OrderLabel>
                <S.OrderLabel>-$13.40</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabel>Delivery Free</S.OrderLabel>
                <S.OrderLabel>-$0.00</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabelTotal>Grand Total</S.OrderLabelTotal>
                <S.OrderLabelTotal>$106.29</S.OrderLabelTotal>
            </S.OrderSummary>
        </S.OrderDetailsContainer>
    )
}