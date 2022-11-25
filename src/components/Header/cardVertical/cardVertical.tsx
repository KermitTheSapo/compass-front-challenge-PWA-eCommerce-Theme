import QuantityCounter from "../../productPage/quantity/quantityCounter/quantityCounter"
import * as S from "./cardVerticalStyle"
import deleteImg from "@/assets/imgs/header/deleteImg.svg"
import { useEffect, useState } from "react";

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
}

export default function CardVertical({ productTitle, productParagraph, productPrice, img }: Props) {
    const [quantityMultiply, setQuantityMultiply] = useState(1)
    const [valueMultiply, setValueMultiply] = useState(productPrice * quantityMultiply)
    const multiply = () => {
        setValueMultiply(productPrice * quantityMultiply)
    }
    useEffect(() => {
        multiply()
    }, [quantityMultiply])
    return (
        <S.CardVertical>
            <S.CardVerticalImgDiv>
                <S.CardImg src={img} alt="an orange leather bag" />
            </S.CardVerticalImgDiv>
            <S.ProductDescription>
                <S.ProductTitle>{productTitle}</S.ProductTitle>
                <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                <QuantityCounter setState={setQuantityMultiply} state={quantityMultiply} />
            </S.ProductDescription>
            <S.PriceDeleteDiv>
                <S.BtnDelete src={deleteImg} alt="an X icon" />
                <S.PriceText>{valueMultiply.toFixed(2)}</S.PriceText>
            </S.PriceDeleteDiv>
        </S.CardVertical>
    )
}