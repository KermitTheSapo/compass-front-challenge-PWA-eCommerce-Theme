import QuantityCounter from "../../productPage/quantity/quantityCounter/quantityCounter"
import * as S from "./cardVerticalStyle"
import deleteImg from "@/assets/imgs/header/deleteImg.svg"
import { useEffect, useState } from "react";
import { deleteBag, getBag } from "../../../products/bag";

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
    setState: React.Dispatch<React.SetStateAction<{
        _id: string;
        name: string;
        price: number;
        category: string;
        image: string;
        description: string;
        imgAlt: string;
        paragraph: string;
        link: string;
        ratings: number;
        discount: number;
        safe: number;
        quantity: number;
    }[]>>;
    id: string;
    quantity: number;
}

export default function CardVertical({ productTitle, productParagraph, productPrice, img, setState, id, quantity }: Props) {
    const [quantityMultiply, setQuantityMultiply] = useState(quantity)
    const [valueMultiply, setValueMultiply] = useState(productPrice * quantityMultiply)
    const multiply = () => {
        setValueMultiply(productPrice * quantityMultiply)
    }
    useEffect(() => {
        multiply()
    }, [quantityMultiply])

    const deleteProduct = () => {
        getBag().then((res) => setState(res))
        deleteBag(id).then((res) => { console.log(res) })
        getBag().then((res) => setState(res))
        alert("deleted")
    }
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
                <S.BtnDelete src={deleteImg} alt="an X icon" onClick={() => { deleteProduct() }} />
                <S.PriceText>{valueMultiply.toFixed(2)}</S.PriceText>
            </S.PriceDeleteDiv>
        </S.CardVertical>
    )
}