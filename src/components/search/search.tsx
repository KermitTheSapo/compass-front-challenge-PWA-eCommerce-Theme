import * as S from "./searchStyle"

import arrowBack from "@/assets/imgs/search/arrowLeft.svg"
import { useNavigate } from "react-router-dom"
import ProductsItem from "../../products/products.json"
import ItemArrival from "../../components/Home/main/Arrivals/itemArrival/itemArrival"
import { Helmet } from "react-helmet"

export default function Search() {
    const navigate = useNavigate()
    return (
        <S.SearchContainer>
            <Helmet>
                <title>Coral'l | Search</title>
            </Helmet>
            <S.SearchHeader>
                <S.ArrowBack onClick={() => { navigate(-1) }} src={arrowBack} alt="" />
                <S.InputSearch type="text" placeholder="Search" />
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
                    {ProductsItem.map((item, key) => (
                        <S.Div key={key}>
                            <ItemArrival ImgSrc={item.img} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item.link} ratings={item.ratings} link2={""} information={false} />
                        </S.Div>
                    ))}
                </S.NewArrivalsList>
            </S.NewArrivals>
        </S.SearchContainer>
    )
}