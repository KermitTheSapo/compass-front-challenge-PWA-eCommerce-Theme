import * as S from "./cardStyle"
import { deleteBag, getBag } from "../../../products/bag";
import { useEffect, useState } from "react";
import { postWishlist } from "../../../products/wishlist";

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
    safe: number;
    discount: number;
    id: string;
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
    }[]>>
    ;
    ratings: number;
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
    index: number;
}
export default function Card({ productTitle, productParagraph, productPrice, img, safe, discount, id, setState, ratings, setTotalValue, stateProductList, index }: Props) {
    const [quantityValue, setQuantityValue] = useState(1)
    const [ProductValue, setProductValue] = useState(0)
    const deleteProduct = () => {
        getBag().then((res) => setState(res))
        deleteBag(id)
        getBag().then((res) => setState(res))
        alert("deleted")
    }
    const moveToWishlist = () => {
        const product = {
            name: productTitle,
            paragraph: productParagraph,
            description: productParagraph,
            price: productPrice,
            safe: safe,
            discount: discount,
            link: "link",
            imgAlt: "imgAlt",
            image: img,
            ratings: ratings,
            quantity: 1
        }
        postWishlist(product)
        alert("moved")
    }
    useEffect(() => {
        setProductValue(productPrice * quantityValue)
    }, [quantityValue, stateProductList])
    const handleTotalPrice = (value: string) => {
        setQuantityValue(Number(value))
        // @ts-ignore
        setTotalValue((item) => item.map((price, idx) => idx === index ? +(value * productPrice).toFixed(2) : price))
    }
    return (
        <S.CardContainer>
            <S.CardInfo>
                <S.ImgProduct src={img} alt="image of a product" />
                <S.Information>
                    <S.ProductTitle>{productTitle}</S.ProductTitle>
                    <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                    <S.DivQuantity>
                        <S.QntParagraph>Qty:</S.QntParagraph>
                        <S.SelectOptions name="" id="" onChange={(e) => handleTotalPrice(e.target.value)}>
                            <option value="1">{1}</option>
                            <option value="2">{2}</option>
                            <option value="3">{3}</option>
                            <option value="4">{4}</option>
                            <option value="5">{5}</option>
                        </S.SelectOptions>
                    </S.DivQuantity>
                    <S.Values>
                        <S.Price>${ProductValue.toFixed(2)}</S.Price>
                        <S.Safe>${safe}</S.Safe>
                        <S.Discount>{discount}% OFF</S.Discount>
                    </S.Values>
                </S.Information>
            </S.CardInfo>
            <S.Separator></S.Separator>
            <S.Actions>
                <S.ActionText onClick={() => moveToWishlist()}>Move to Wishlist</S.ActionText>
                <S.VerticalSeparator></S.VerticalSeparator>
                <S.ActionText onClick={() => deleteProduct()}>Remove</S.ActionText>
            </S.Actions>
        </S.CardContainer >
    )
}