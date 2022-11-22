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
    safe?: string;
    discount?: string;
    onClick?: () => void;
    link: string;
    state?: boolean;
    setState?: () => void;
    star?: string;
    ratings?: string;
    link2?: string;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, itemName, onClick, link, state, setState, safe, discount, star, ratings, link2 }: Props) {
    const navigate = useNavigate();
    const [heartStatus, setHeartStatus] = useState(true)
    return (
        <>
            <S.ItemLink>
                <S.ItemArrival onClick={() => { window.screen.width > 768 ? navigate(link) : navigate(link2) }}>
                    <S.ImgProduct onClick={onClick} src={ImgSrc} alt={ImgAlt} />
                    <S.InformationDiv >
                        <S.NameHeart>
                            <S.ItemName>{itemName}</S.ItemName>
                            <S.Heart onClick={() => heartStatus ? setHeartStatus(false) : setHeartStatus(true)} src={heartStatus === true ? heart : heartFill} alt="" />
                        </S.NameHeart>
                        <S.ItemDescription>{Description}</S.ItemDescription>
                        <S.DivStar>
                            <S.Star src={star} alt="" />
                            <S.Ratings>{ratings}</S.Ratings>
                        </S.DivStar>
                        <S.DivInfoItem>
                            <S.ItemPrice>${Price}</S.ItemPrice>
                            <S.ItemSafe>{safe}</S.ItemSafe>
                            <S.ItemDiscount>{discount}</S.ItemDiscount>
                        </S.DivInfoItem>
                    </S.InformationDiv>
                </S.ItemArrival>
            </S.ItemLink>
            {state && <>
                <BottomSheetHome name={itemName} onClick={setState} description={Description} price={Price} img={ImgSrc} link={link} />
            </>}
        </>
    )
}