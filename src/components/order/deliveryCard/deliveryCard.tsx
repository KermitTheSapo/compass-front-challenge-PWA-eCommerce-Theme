import * as S from "./deliveryCardStyle"

type Props = {
    name: string
    paragraph: string
    img: string
}

export default function DeliveryCard({ name, paragraph, img }: Props) {
    return (
        <S.DeliveryCardContainer>
            <S.ImgProduct src={img} alt="" />
            <S.ProductContent>
                <S.ProductDate>08 Dec</S.ProductDate>
                <S.ProductName>{name}</S.ProductName>
                <S.ProductParagraph>{paragraph}</S.ProductParagraph>
            </S.ProductContent>
        </S.DeliveryCardContainer>
    )
}