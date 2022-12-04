import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./itemArrivalStyle"
import heart from "@/assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "@/assets/imgs/home/main/arrivals/heartFill.svg"
import BottomSheetHome from "../bottomSheetHome/bottomSheetHome";
import { postBag } from "../../../../../products/bag";
import { deleteWishlist, postWishlist } from "../../../../../products/wishlist";

type Props = {
    ImgSrc: string;
    ImgAlt: string;
    itemName: string;
    Description: string;
    Price: number;
    safe: number;
    discount: number;
    link: string;
    star?: string;
    ratings: number;
    information: boolean;
    isButtonAddTrue: boolean;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, itemName, link, safe, discount, star, ratings, information, isButtonAddTrue }: Props) {
    const navigate = useNavigate();
    const [heartStatus, setHeartStatus] = useState(true)
    const changeLink = () => {
        navigate(`/product?id=${link}`)
    }
    const addItemToBag = () => {
        const product = {
            name: itemName,
            paragraph: Description,
            description: Description,
            price: Price,
            safe: safe,
            discount: discount,
            link: "asdf",
            imgAlt: ImgAlt,
            image: ImgSrc,
            ratings: ratings,
            quantity: 1
        }
        postBag(product)
        alert("Item added to cart")
    }
    useEffect(() => {
        const product = {
            name: itemName,
            paragraph: Description,
            description: Description,
            price: Price,
            safe: safe,
            discount: discount,
            link: link,
            imgAlt: ImgAlt,
            image: ImgSrc,
            ratings: ratings,
            quantity: 1
        }
        if (heartStatus) {
            deleteWishlist(link)
        } else {
            postWishlist(product)
            alert("Item added to wishlist")
        }
    }, [heartStatus])
    const [bottomSheetStatus, setBottomSheetStatus] = useState(false)
    return (
        <>
            <S.ItemLink>
                <S.ItemArrival onClick={() => { window.screen.width > 768 ? changeLink() : "" }}>
                    <S.ImgProduct onClick={() => setBottomSheetStatus(!bottomSheetStatus)} src={ImgSrc} alt={ImgAlt} />
                    <S.InformationDiv >
                        <S.NameHeart>
                            <S.ItemName>{itemName}</S.ItemName>
                            <S.Heart onClick={() => heartStatus ? setHeartStatus(false) : setHeartStatus(true)} src={heartStatus === true ? heart : heartFill} alt="a heart icon" />
                        </S.NameHeart>
                        <S.ItemDescription>{Description}</S.ItemDescription>
                        {information &&
                            <S.DivStar>
                                <S.Star src={star} alt="a star icon" />
                                <S.Ratings>{ratings} Ratings</S.Ratings>
                            </S.DivStar>}
                        <S.DivInfoItem>
                            <S.ItemPrice>${Price.toFixed(2)}</S.ItemPrice>
                            {information && <S.ItemSafe>{safe}</S.ItemSafe>}
                            {information &&
                                <S.ItemDiscount>{discount}%OFF</S.ItemDiscount>}
                        </S.DivInfoItem>
                    </S.InformationDiv>
                </S.ItemArrival>
                {isButtonAddTrue && <S.ButtonAddToBag onClick={() => { addItemToBag() }}>Add to bag</S.ButtonAddToBag>}
            </S.ItemLink>
            {bottomSheetStatus && <>
                <BottomSheetHome name={itemName} onClick={() => setBottomSheetStatus(!bottomSheetStatus)} description={Description} price={Price} img={ImgSrc} link={link} alt={ImgAlt} safe={safe} discount={discount} ratings={ratings} />
            </>}
        </>
    )
}