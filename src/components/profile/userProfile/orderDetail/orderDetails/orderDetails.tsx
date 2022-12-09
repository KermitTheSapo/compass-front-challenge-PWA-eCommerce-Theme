import * as S from "./orderDetailsStyle"

type Props = {
    subTotal: string;
    discount: number
    total: string;
}

export default function OrderDetails({ subTotal, discount, total }: Props) {
    return (
        <S.OrderDetailsContainer>
            <S.OrderTitle>Order Details</S.OrderTitle>
            <S.OrderSummary>
                <S.OrderLabel>Sub Total</S.OrderLabel>
                <S.OrderLabel>${subTotal}</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabel>Discount</S.OrderLabel>
                <S.OrderLabel>-${discount}</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabel>Delivery Free</S.OrderLabel>
                <S.OrderLabel>-$0.00</S.OrderLabel>
            </S.OrderSummary>
            <S.OrderSummary>
                <S.OrderLabelTotal>Grand Total</S.OrderLabelTotal>
                <S.OrderLabelTotal>${total}</S.OrderLabelTotal>
            </S.OrderSummary>
        </S.OrderDetailsContainer>
    )
}