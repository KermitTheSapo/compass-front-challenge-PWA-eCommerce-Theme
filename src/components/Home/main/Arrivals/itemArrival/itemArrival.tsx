import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./itemArrivalStyle"
import heart from "@/assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "@/assets/imgs/home/main/arrivals/heartFill.svg"
import BottomSheetHome from "../bottomSheetHome/bottomSheetHome";

type Props = {
    ImgSrc: string;
    ImgAlt: string;
    itemName: string;
    Description: string;
    Price: number;
    safe?: number;
    discount?: number;
    link: string;
    star?: string;
    ratings?: number;
    link2: string;
    information: boolean;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, itemName, link, safe, discount, star, ratings, link2, information }: Props) {
    const navigate = useNavigate();
    const [heartStatus, setHeartStatus] = useState(true)
    const changeLink = () => {
        navigate(`/product?id=${link}`)
    }
    const [bottomSheetStatus, setBottomSheetStatus] = useState(false)
    return (
        <>
            <S.ItemLink>
                <S.ItemArrival onClick={() => { window.screen.width > 768 ? changeLink() : navigate(link2) }}>
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
                            <S.ItemSafe>{safe}</S.ItemSafe>
                            {information &&
                                <S.ItemDiscount>{discount}%OFF</S.ItemDiscount>}
                        </S.DivInfoItem>
                    </S.InformationDiv>
                </S.ItemArrival>
            </S.ItemLink>
            {bottomSheetStatus && <>
                <BottomSheetHome name={itemName} onClick={() => setBottomSheetStatus(!bottomSheetStatus)} description={Description} price={Price} img={ImgSrc} link={link} alt={ImgAlt} />
            </>}
        </>
    )
}