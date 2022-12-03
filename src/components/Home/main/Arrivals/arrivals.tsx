import * as S from "./arrivalsStyle"
import ItemArrival from "./itemArrival/itemArrival"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProducts } from "../../../../products/products";

export default function Arrivals() {
    const navigate = useNavigate();
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
        ratings: 0,
        safe: 0,
        discount: 0
    }])
    useEffect(() => {
        getProducts().then((res) => setProductsList(res))
    }, [])
    return (
        <S.ArrivalsSection>
            <S.ArrivalHeader>
                <S.HeaderTitle >New Arrivals</S.HeaderTitle>
                <S.LinkParagraph onClick={() => navigate("/error")}>
                    <S.Paragraph>View all &gt;</S.Paragraph>
                </S.LinkParagraph>
            </S.ArrivalHeader>
            <S.ArrivalList>
                {productsList && productsList.map((item, key) => (
                    <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} ratings={item.ratings} information={false} safe={item.safe} discount={item.discount} isButtonAddTrue={false} />
                ))}
            </S.ArrivalList>
        </S.ArrivalsSection>
    )
}