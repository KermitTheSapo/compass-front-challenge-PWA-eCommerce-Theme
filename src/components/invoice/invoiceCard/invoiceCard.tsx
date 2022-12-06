import * as S from "./invoiceCardStyle"

export default function InvoiceCard() {
    return (
        <S.InvoiceCardContainer>
            <S.CardTitle>Coach</S.CardTitle>
            <S.CardParagraph>Leather Coach Bag</S.CardParagraph>
            <S.CardPrice>$54.69</S.CardPrice>
            <S.CardQuantity>Qty- 1</S.CardQuantity>
            <S.Separator></S.Separator>
        </S.InvoiceCardContainer>
    )
}