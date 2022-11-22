import QuantityCounter from "../../productPage/quantity/quantityCounter/quantityCounter"
import * as S from "./cardVerticalStyle"
import deleteImg from "@/assets/imgs/header/deleteImg.svg"

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: string;
    price: number;
    setPrice: (price: number) => void;
    img: string;
}

export default function CardVertical({ productTitle, productParagraph, productPrice, price, setPrice, img }: Props) {

    return (
        <S.CardVertical>
            <S.CardVerticalImgDiv>
                <S.CardImg src={img} alt="an orange leather bag" />
            </S.CardVerticalImgDiv>
            <S.ProductDescription>
                <S.ProductTitle>{productTitle}</S.ProductTitle>
                <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                <QuantityCounter />
            </S.ProductDescription>
            <S.PriceDeleteDiv>
                <S.BtnDelete src={deleteImg} alt="an X icon" />
                <S.PriceText>{productPrice}</S.PriceText>
            </S.PriceDeleteDiv>
        </S.CardVertical>
    )
}