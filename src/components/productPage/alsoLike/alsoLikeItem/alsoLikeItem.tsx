import * as S from "./alsoLikeItemStyle"
import ItemArrival from "../../../Home/main/Arrivals/itemArrival/itemArrival"
import heart from "../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../assets/imgs/home/main/arrivals/heartFill.svg"

type Props = {
    imgSrc: string;
    imgAlt: string;
    itemName: string;
    description: string;
    price: string;
    link: string;
}


export default function AlsoLikeItem({ description, imgAlt, imgSrc, itemName, link, price }: Props) {
    return (
        <S.AlsoLikeProducts>
            <ItemArrival ImgSrc={imgSrc} ImgAlt={imgAlt} itemName={itemName} heartSrc={heart} heartFill={heartFill} heartAlt={""} Description={description} Price={price} link={link} />
            <S.BtnTrending>
                <S.SpanTrending>Trending</S.SpanTrending>
            </S.BtnTrending>
        </S.AlsoLikeProducts>
    )
}