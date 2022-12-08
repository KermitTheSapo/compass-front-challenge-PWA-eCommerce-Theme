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
    index: number;
    setTotalValue: React.Dispatch<React.SetStateAction<never[]>>;
    stateProductList: {
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
    }[];
}

export default function CardVertical({ productTitle, productParagraph, productPrice, img, setState, id, index, setTotalValue, stateProductList }: Props) {
    const [quantityValue, setQuantityValue] = useState(1)
    const [ProductValue, setProductValue] = useState(0)
    const deleteProduct = () => {
        getBag().then((res) => setState(res))
        deleteBag(id)
        getBag().then((res) => setState(res))
        alert("deleted")
    }
    useEffect(() => {
        setProductValue(productPrice * quantityValue)
    }, [quantityValue, stateProductList])
    useEffect(() => {
        // @ts-ignore
        setTotalValue((item) => item.map((price, idx) => idx === index ? +(quantityValue * productPrice).toFixed(2) : price))
    }, [quantityValue])
    return (
        <S.CardVertical>
            <S.CardVerticalImgDiv>
                <S.CardImg src={img} alt="an orange leather bag" />
            </S.CardVerticalImgDiv>
            <S.ProductDescription>
                <S.ProductTitle>{productTitle}</S.ProductTitle>
                <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                <QuantityCounter setState={setQuantityValue} state={quantityValue} />
            </S.ProductDescription>
            <S.PriceDeleteDiv>
                <S.BtnDelete src={deleteImg} alt="an X icon" onClick={() => { deleteProduct() }} />
                <S.PriceText>{ProductValue.toFixed(2)}</S.PriceText>
            </S.PriceDeleteDiv>
        </S.CardVertical>
    )
}