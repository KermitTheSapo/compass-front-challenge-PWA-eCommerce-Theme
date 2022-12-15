import * as S from "./deliveryCardStyle"

type Props = {
    name: string
    paragraph: string
    img: string
    date: string
}

export default function DeliveryCard({ name, paragraph, img, date }: Props) {
    return (
        <S.DeliveryCardContainer>
            <S.ImgProduct src={img} alt="product image" />
            <S.ProductContent>
                <S.ProductDate>{date}</S.ProductDate>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductParagraph>{paragraph}</S.ProductParagraph>
            </S.ProductContent>
        </S.DeliveryCardContainer>
    )
}