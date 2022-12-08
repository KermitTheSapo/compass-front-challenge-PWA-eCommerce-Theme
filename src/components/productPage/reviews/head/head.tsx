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
    }[];
}

export default function Head({ id, state }: Props) {
    let location = useLocation();
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

    return (
        <S.HeadContainer>
            <S.ProductHead>
                {productsList && productsList.map((item) => (
                    <>
                        <S.ProductHeadTitle>{item.name}</S.ProductHeadTitle>
                        <S.ProductHeadSubTitle>{item.paragraph}</S.ProductHeadSubTitle>
                    </>
                ))}
            </S.ProductHead>
            <S.Ratings>
                <S.AverageRatings>
                    <S.AverageRatingsNumber>4.5</S.AverageRatingsNumber>
                    <S.AverageRatingsStar src={star} alt="star icon" />
                    <S.AverageTitle>Average Rating</S.AverageTitle>
                </S.AverageRatings>
                <Stats id={id} state={state} />
            </S.Ratings>
            <S.Photos>
                <S.PhotosTitle>Customer Photos</S.PhotosTitle>
                <S.PhotoCarousel>
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                </S.PhotoCarousel>
            </S.Photos>
        </S.HeadContainer>
    )
}