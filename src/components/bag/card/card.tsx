import { useEffect, useState } from "react";
import * as S from "./cardStyle"
import { deleteBag, getBag } from "../../../products/bag";

type Props = {
    productTitle: string;
    productParagraph: string;
    productPrice: number;
    img: string;
    safe: number;
    discount: number;
    id: string;
    setState: React.Dispatch<React.SetStateAction<{}[]>>;
}
export default function Card({ productTitle, productParagraph, productPrice, img, safe, discount, id, setState }: Props) {
    const [quantity, setQuantity] = useState("")

    const deleteProduct = () => {
        getBag().then((res) => setState(res))
        deleteBag(id).then((res) => { console.log(res) })
        getBag().then((res) => setState(res))
        alert("deleted")
    }
    return (
        <S.CardContainer>
            <S.CardInfo>
                <S.ImgProduct src={img} alt="" />
                <S.Information>
                    <S.ProductTitle>{productTitle}</S.ProductTitle>
                    <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
                    <S.DivQuantity>
                        <S.QntParagraph>Qty:</S.QntParagraph>
                        <S.SelectOptions name="" id="" onChange={(e) => { setQuantity(e.target.value) }}>
                            <option value="1">{1}</option>
                            <option value="2">{2}</option>
                            <option value="3">{3}</option>
                            <option value="4">{4}</option>
                            <option value="5">{5}</option>
                        </S.SelectOptions>
                    </S.DivQuantity>
                    <S.Values>
                        <S.Price>${productPrice}</S.Price>
                        <S.Safe>${safe}</S.Safe>
                        <S.Discount>{discount}% OFF</S.Discount>
                    </S.Values>
                </S.Information>
            </S.CardInfo>
            <S.Separator></S.Separator>
            <S.Actions>
                <S.ActionText>Move to Wishlist</S.ActionText>
                <S.VerticalSeparator></S.VerticalSeparator>
                <S.ActionText onClick={() => deleteProduct()}>Remove</S.ActionText>
            </S.Actions>
        </S.CardContainer>
    )
}