import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./itemArrivalStyle"
import heart from "../../../../../assets/imgs/home/main/arrivals/heart.svg"
import heartFill from "../../../../../assets/imgs/home/main/arrivals/heartFill.svg"

type Props = {
    ImgSrc: string;
    ImgAlt: string;
    itemName: string;
    Description: string;
    Price: string;
    onClick?: () => void;
    link: string;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, itemName, onClick, link }: Props) {
    const navigate = useNavigate();

    const [heartStatus, setHeartStatus] = useState(true)

    return (
        <S.ItemLink>
            <S.ItemArrival onClick={() => navigate(link)}>
                <S.ImgProduct onClick={onClick} src={ImgSrc} alt={ImgAlt} />
                <S.InformationDiv >
                    <S.NameHeart>
                        <S.ItemName>{itemName}</S.ItemName>
                        <S.Heart onClick={() => heartStatus ? setHeartStatus(false) : setHeartStatus(true)} src={heartStatus === true ? heart : heartFill} alt="" />
                    </S.NameHeart>
                    <S.ItemDescription>{Description}</S.ItemDescription>
                    <S.ItemPrice>{Price}</S.ItemPrice>
                </S.InformationDiv>
            </S.ItemArrival>
        </S.ItemLink>
    )
}