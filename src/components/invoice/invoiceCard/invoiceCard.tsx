import * as S from "./invoiceCardStyle"

type Props = {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export default function InvoiceCard({ name, description, price, quantity }: Props) {
    return (
        <S.InvoiceCardContainer>
            <S.CardTitle>{name}</S.CardTitle>
            <S.CardParagraph>{description}</S.CardParagraph>
            <S.CardPrice>${price}</S.CardPrice>
            <S.CardQuantity>Qty- {quantity}</S.CardQuantity>
            <S.Separator></S.Separator>
        </S.InvoiceCardContainer>
    )
}