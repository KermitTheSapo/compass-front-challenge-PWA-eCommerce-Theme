import { getWishlist } from "../../../../products/wishlist"
import { useEffect, useState } from "react"
import * as S from "./wishlistStyle"
import ItemArrival from "../../../../components/Home/main/Arrivals/itemArrival/itemArrival"
import WishlistError from "../../../../components/wishlist/wishlistError/wishlistError"
import stars from "@/assets/imgs/home/main/arrivals/stars.svg"
export default function WishlistPage() {
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
        <S.WishlistPage>
            <S.WishlistParagraph>{productsList.length} Product(s)</S.WishlistParagraph>
            <S.ItemList>

                {productsList.map((item, key) => (
                    <S.ItemDiv key={key}>
                        <ItemArrival ImgSrc={item.image} ImgAlt={item.imgAlt} itemName={item.name} Description={item.paragraph} Price={item.price} link={item._id} safe={item.safe} discount={item.discount} star={stars} ratings={item.ratings} information={true} isButtonAddTrue={true} />
                    </S.ItemDiv>
                ))}

            </S.ItemList>
            {productsList.length === 0 && <WishlistError />}
        </S.WishlistPage>
    )
}