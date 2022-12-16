import * as S from "./headStyle"
import star from "@/assets/imgs/productPage/reviews/star.svg"
import img from "@/assets/imgs/productPage/reviews/image.png"
import Stats from "./stats/stats"
import { getProductsById } from "../../../../products/products"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

type Props = {
    id: string;
    state: {
        date: string;
        description: string;
        productId: string;
        rating: string;
        title: string;
        userName: string;
        image: string;
    }[];
}

export default function Head({ id, state }: Props) {
    let location = useLocation();
    const [Ratings, setRatings] = useState([0])
    const [TotalRatings, setTotalRatings] = useState(0)
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
        getProductsById(id).then((res) => setProductsList([res]))
    }, [location, id])

    useEffect(() => {
        let value = state.map(item => Number(item.rating))
        setRatings(value)
    }, [state])
    useEffect(() => {
        setTotalRatings(Ratings.reduce((a, b) => a + b, 0))
    }, [Ratings])
    return (
        <S.HeadContainer>
            <S.ProductHead>
                {productsList && productsList.map((item, key) => (
                    <div key={key}>
                        <S.ProductHeadTitle>{item.name}</S.ProductHeadTitle>
                        <S.ProductHeadSubTitle>{item.paragraph}</S.ProductHeadSubTitle>
                    </div>
                ))}
            </S.ProductHead>
            <S.Ratings>
                <S.AverageRatings>
                    <S.AverageRatingsNumber>{TotalRatings === 0 ? 0 : (TotalRatings / state.length).toFixed(2)}</S.AverageRatingsNumber>
                    <S.AverageRatingsStar src={star} alt="star icon" />
                    <S.AverageTitle>Average Rating</S.AverageTitle>
                </S.AverageRatings>
                <Stats id={id} state={state} total={state.length} />
            </S.Ratings>
            <S.Photos>
                <S.PhotosTitle>Customer Photos</S.PhotosTitle>
                <S.PhotoCarousel>
                    {
                        state.length === 0 ? <S.NoImageParagraph>There are no images yet :/</S.NoImageParagraph> : null
                    }
                    {
                        //@ts-ignore
                        state.map((item) => {
                            if (item.image !== "") {
                                return <S.ImgCarousel src={item.image} alt="product img" />
                            }
                        })
                    }
                </S.PhotoCarousel>
            </S.Photos>
        </S.HeadContainer>
    )
}