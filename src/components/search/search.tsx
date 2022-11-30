import * as S from "./searchStyle"

import arrowBack from "@/assets/imgs/search/arrowLeft.svg"
import { useNavigate } from "react-router-dom"
import ItemArrival from "../../components/Home/main/Arrivals/itemArrival/itemArrival"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { getProducts } from "../../products/products";

export default function Search() {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
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
    return (
        <S.SearchContainer>
            <Helmet>
                <title>Coral'l | Search</title>
            </Helmet>
            <S.SearchHeader>
                <S.ArrowBack onClick={() => { navigate(-1) }} src={arrowBack} alt="" />
                <S.InputSearch type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)} />
            </S.SearchHeader>
            <S.RecentSearch>
                <S.RecentSearchTitle>Recent Search</S.RecentSearchTitle>
                <S.RecentSearchList>
                    <S.RecentSearchItem>Recent Search</S.RecentSearchItem>
                    <S.RecentSearchItem>Recent Search</S.RecentSearchItem>
                    <S.RecentSearchItem>Recent Search</S.RecentSearchItem>
                    <S.RecentSearchItem>Recent Search</S.RecentSearchItem>
                    <S.RecentSearchItem>Recent</S.RecentSearchItem>
                </S.RecentSearchList>
            </S.RecentSearch>
            <S.NewArrivals>
                <S.NewArrivalsTitle>New Arrivals</S.NewArrivalsTitle>
                <S.NewArrivalsList>
                    {productsList && productsList.map((item, key) => (
                        <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} ratings={item.ratings} link2={""} information={false} />
                    ))}
                </S.NewArrivalsList>
            </S.NewArrivals>
        </S.SearchContainer>
    )
}