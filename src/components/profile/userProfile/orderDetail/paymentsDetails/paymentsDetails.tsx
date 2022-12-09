import * as S from "./paymentsDetailsStyle"

type Props = {
    payment: string;
}

export default function PaymentsDetails({payment}: Props) {
    return (
        <S.PaymentsDetailsContainer>
            <S.PaymentsDetailsTitle>Payment Details</S.PaymentsDetailsTitle>
            <S.PaymentsDetailsContent>
                <S.Paragraph>Upi: {payment}</S.Paragraph>
            </S.PaymentsDetailsContent>
        </S.PaymentsDetailsContainer>
    )
}