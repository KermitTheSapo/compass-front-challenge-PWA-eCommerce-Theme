import * as S from "./alsoLikeItemStyle"
import ItemArrival from "../../../Home/main/Arrivals/itemArrival/itemArrival"
import { getProducts } from "../../../../products/products";
import { useEffect, useState } from "react";
type Props = {
    value: boolean;
}

export default function AlsoLikeItem({ value }: Props) {
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0
    }])
    useEffect(() => {
        getProducts().then((res) => setProductsList(res))
    }, [])
    console.log(productsList)
    return (
        <S.AlsoLikeProducts>
            {productsList && productsList.map((item, key) => (
                <S.Div key={key}>
                    <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} ratings={item.ratings} link2={""} information={value} />
                    <S.BtnTrending>
                        <S.SpanTrending>Trending</S.SpanTrending>
                    </S.BtnTrending>
                </S.Div>
            ))}
        </S.AlsoLikeProducts>
    )
}