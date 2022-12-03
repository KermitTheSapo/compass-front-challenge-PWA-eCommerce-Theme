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
    const [loading, setLoading] = useState(true)
    const [arrayFiltrado, setArrayFiltrado] = useState([{
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
        discount: 0,
        safe: 0
    }])
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
        discount: 0,
        safe: 0
    }])

    useEffect(() => {
        getProducts().then((res) => { setProductsList(res); setLoading(false) })
    }, [])
    //                 if (arrayFiltrado.length === 0){ console.log("asss")    }

    useEffect(() => {
        if (productsList.length !== 0) {
            if (input) {
                setArrayFiltrado(productsList.filter((item) => item.name.includes(input.toLowerCase())))
            } else {
                setArrayFiltrado(productsList)

            }
        }
    }, [input, productsList])

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
                    {loading && <h1>Loading...</h1>}
                    {!loading ? arrayFiltrado.map((item, key) => (
                        <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} ratings={item.ratings} link2={""} information={false} safe={0} discount={0} />
                    )) : null}
                </S.NewArrivalsList>
            </S.NewArrivals>
        </S.SearchContainer>
    )
}