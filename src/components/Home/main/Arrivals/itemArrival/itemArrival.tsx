import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./itemArrivalStyle"
import heart from "@/assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "@/assets/imgs/home/main/arrivals/heartFill.svg"
import BottomSheetHome from "../bottomSheetHome/bottomSheetHome";
import { postBag } from "../../../../../products/bag";
import { deleteWishlist, getWishlist, postWishlist } from "../../../../../products/wishlist";

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
    const [bottomSheetStatus, setBottomSheetStatus] = useState(false)
    const navigate = useNavigate();
    const [heartStatus, setHeartStatus] = useState(false)
    const [wishlist, setWishlist] = useState([{
        _id: "",
        name: "",
        paragraph: "",
        description: "",
        price: 0,
        subTotal: 0,
        safe: 0,
        link: "",
        imgAlt: "",
        image: "",
        ratings: 0,
        quantity: 0,
        heartStatus: false
    }])
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
    const AddToWishlist = () => {
        const product = {
            _id: `${link}`,
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
            quantity: 1,
            heartStatus: true
        }
        if (heartStatus === true) {
            setHeartStatus(false)
            deleteWishlist(link)
            alert("successfully deleted item")
        } else if (heartStatus === false) {
            setHeartStatus(true)
            postWishlist(product)
            alert("Item added to wishlist")
        }
    }
    useEffect(() => {
        getWishlist().then(res => setWishlist(res))
    }, [])
    // const teste = (value) => {
    //     let teste = false
    //     wishlist.map((item) => {
    //         if (item._id === value) {
    //             // setHeartStatus(true)
    //             teste = true
    //         } else {
    //             // setHeartStatus(false)
    //             teste = false
    //         }
    //     })
    //     return teste
    // }
    // useEffect(() => {
    //     console.log(wishlist)
    // }, [])
    return (
        <>
            <S.ItemLink>
                <S.ItemArrival onClick={() => { window.screen.width > 768 ? changeLink() : "" }}>
                    <S.ImgProduct onClick={() => setBottomSheetStatus(!bottomSheetStatus)} src={ImgSrc} alt={ImgAlt} />
                    <S.InformationDiv >
                        <S.NameHeart>
                            <S.ItemName>{itemName}</S.ItemName>
                            <S.Heart onClick={() => AddToWishlist()} src={heartStatus ? heartFill : heart} alt="a heart icon" />
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