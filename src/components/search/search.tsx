import * as S from "./searchStyle"

import arrowBack from "@/assets/imgs/search/arrowLeft.svg"
import { useNavigate } from "react-router-dom"
import ItemArrival from "../../components/Home/main/Arrivals/itemArrival/itemArrival"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import { getProducts } from "../../products/products";
import art from "@/assets/imgs/searchError/searchArt.svg"


export default function Search() {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(true)
    const [noResult, setNoResult] = useState(false)
    const [recentSearchValue, setRecentSearchValue] = useState([{ name: "" }])
    const [arrayFiltrado, setArrayFiltrado] = useState([{
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
        discount: 0,
        safe: 0
    }])
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
        discount: 0,
        safe: 0
    }])

    useEffect(() => {
        getProducts("36", "0").then((res) => { setProductsList(res.results); setLoading(false) })
    }, [])
    useEffect(() => {
        if (productsList.length !== 0) {
            if (input) {
                setArrayFiltrado(productsList.filter((item) => item.name.includes(input.toLowerCase())))
                productsList.filter((item) => item.name.includes(input.toLowerCase())).length === 0 ? setNoResult(true) : setNoResult(false)
            } else {
                setArrayFiltrado(productsList)
            }
        }
    }, [input, productsList])

    const recentSearch = (e: string) => {
        setTimeout(() => {
            setRecentSearchValue([...recentSearchValue, { name: e }])
            localStorage.setItem("recentSearch", JSON.stringify([...recentSearchValue, { name: e }]))
        }, 3000)
    }

    useEffect(() => {
        if (localStorage.getItem("recentSearch")) {
            setRecentSearchValue(JSON.parse(localStorage.getItem("recentSearch") || ""))
        }
    }, [])

    return (
        <S.SearchContainer>
            <Helmet>
                <title>Coral'l | Search</title>
            </Helmet>
            <S.SearchHeader>
                <S.ArrowBack onClick={() => { navigate(-1) }} src={arrowBack} alt="left arrow icon" />
                <S.InputSearch type="text" placeholder="Search" value={input} onChange={(e) => { setInput(e.target.value); recentSearch(e.target.value) }} />
            </S.SearchHeader>
            <S.RecentSearch>
                <S.RecentSearchTitle>Recent Search</S.RecentSearchTitle>
                <S.RecentSearchList>
                    {recentSearchValue.map((item) => {
                        if (item.name === "") {
                            return null
                        } else {
                            return <S.RecentSearchItem onClick={() => setInput(item.name)}>{item.name}</S.RecentSearchItem>
                        }
                    })}
                </S.RecentSearchList>
            </S.RecentSearch>
            <S.NewArrivals>
                <S.NewArrivalsTitle>New Arrivals</S.NewArrivalsTitle>
                <S.NewArrivalsList>
                    {loading && <p>Loading...</p>}
                    {!loading ? arrayFiltrado.map((item) => (
                        <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.id} ratings={item.ratings} information={false} safe={item.safe} discount={item.discount} isButtonAddTrue={false} />
                    )) : null}
                </S.NewArrivalsList>
            </S.NewArrivals>
            {noResult && <>
                <S.ConfirmedAdvise>
                    <S.ImgConfirmed src={art} alt="search magnifying glass icon" />
                    <S.ConfirmedAdviseTitle>Whoops!</S.ConfirmedAdviseTitle>
                    <S.ConfirmedAdviseText>We couldn't find what you’re looking for. Try something else.</S.ConfirmedAdviseText>
                </S.ConfirmedAdvise>
                <S.BtnActionsDiv>
                    <S.btnContinue onClick={() => navigate("/home")}>Back to home</S.btnContinue>
                </S.BtnActionsDiv>
            </>}

        </S.SearchContainer>
    )
}