import * as S from "./alsoLikeItemStyle"
import ItemArrival from "../../../Home/main/Arrivals/itemArrival/itemArrival"
import { getProducts } from "../../../../products/products";
import { useEffect, useState } from "react";
type Props = {
    value: boolean;
}

export default function AlsoLikeItem({ value }: Props) {
    const [productsList, setProductsList] = useState([{
        id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        safe: 0,
        discount: 0
    }])
    useEffect(() => {
        getProducts("36", "0").then((res) => setProductsList(res.products))
    }, [])
    return (
        <S.AlsoLikeProducts>
            {productsList && productsList.map((item, key) => (
                <S.Div key={key}>
                    <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.id} ratings={item.ratings} information={value} isButtonAddTrue={false} safe={item.safe} discount={item.discount} />
                    <S.BtnTrending>
                        <S.SpanTrending>Trending</S.SpanTrending>
                    </S.BtnTrending>
                </S.Div>
            ))}
        </S.AlsoLikeProducts>
    )
}