import * as S from "./alsoLikeItemStyle"
import ItemArrival from "../../../Home/main/Arrivals/itemArrival/itemArrival"
import ProductsItem from "../../../../products/products.json"

type Props = {
    value: boolean;
}

export default function AlsoLikeItem({ value }: Props) {
    return (
        <S.AlsoLikeProducts>
            {ProductsItem.map((item, key) => (
                <S.Div key={key}>
                    <ItemArrival ImgSrc={item.img} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.link} ratings={item.ratings} link2={""} information={value} />
                    <S.BtnTrending>
                        <S.SpanTrending>Trending</S.SpanTrending>
                    </S.BtnTrending>
                </S.Div>
            ))}
        </S.AlsoLikeProducts>
    )
}