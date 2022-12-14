import * as S from "./wishlistStyle"
import arrow from "@/assets/imgs/notification/arrowLeft.svg"
import { useEffect, useState } from "react"
import ItemArrival from "../../components/Home/main/Arrivals/itemArrival/itemArrival"
import stars from "@/assets/imgs/home/main/arrivals/stars.svg"
import { getWishlist } from "../../products/wishlist"
import { useNavigate } from "react-router-dom"
import WishlistError from "./wishlistError/wishlistError"
import { Helmet } from "react-helmet"

export default function Wishlist() {
    const navigate = useNavigate()
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
        getWishlist().then((res) => setProductsList(res))
    }, [])

    return (
        <S.WishlistContainer>
            <Helmet>
                <title>Coral'l | My Wishlist</title>
            </Helmet>
            <S.WishlistHeader>
                <S.ImgArrow src={arrow} alt="left arrow" onClick={() => { navigate(-1) }} />
                <S.WishlistTitle>My Wishlist</S.WishlistTitle>
            </S.WishlistHeader>
            <S.WishlistContent>
                <S.WishlistParagraph>{productsList.length} Product(s)</S.WishlistParagraph>
                <S.WishlistProducts>
                    {productsList.map((item, key) => (
                        <div key={key}>
                            <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                        </div>
                    ))}
                    {productsList.length === 0 && <WishlistError />}
                </S.WishlistProducts>
            </S.WishlistContent>
        </S.WishlistContainer>
    )
}