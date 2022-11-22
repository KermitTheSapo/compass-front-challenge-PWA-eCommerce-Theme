import * as S from "./alsoLikeItemStyle"
import ItemArrival from "../../../Home/main/Arrivals/itemArrival/itemArrival"
import ProductsItem from "../../../../products/products.json"

export default function AlsoLikeItem() {
    return (
        <S.AlsoLikeProducts>
            {ProductsItem.map((item) => (
                <S.Div>
                    <ItemArrival ImgSrc={item.img} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.link} />
                    <S.BtnTrending>
                        <S.SpanTrending>Trending</S.SpanTrending>
                    </S.BtnTrending>
                </S.Div>
            ))}
        </S.AlsoLikeProducts>
    )
}