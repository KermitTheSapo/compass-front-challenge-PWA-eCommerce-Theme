import * as S from "./summaryProductStyle"

type Props = {
    productTitle: string;
    productParagraph: string;
    img: string;
    quantity: number;
}
export default function SummaryProduct({ productTitle, productParagraph, img, quantity }: Props) {
    return (
        <S.ProductContainer>
            <S.ImgProduct src={img} alt="image of a product" />
            <S.ProductContent>
                <S.ProductName>{productTitle}</S.ProductName>
                <S.ProductDescription>{productParagraph}</S.ProductDescription>
                <S.ProductQuantity>Qty- {quantity}</S.ProductQuantity>
            </S.ProductContent>
        </S.ProductContainer>
    )
}