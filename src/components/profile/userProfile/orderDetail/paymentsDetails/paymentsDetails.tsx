import * as S from "./paymentsDetailsStyle"

export default function PaymentsDetails() {
    return (
        <S.PaymentsDetailsContainer>
            <S.PaymentsDetailsTitle>Payment Details</S.PaymentsDetailsTitle>
            <S.PaymentsDetailsContent>
                <S.Paragraph>Cash on Delivery</S.Paragraph>
            </S.PaymentsDetailsContent>
        </S.PaymentsDetailsContainer>
    )
}