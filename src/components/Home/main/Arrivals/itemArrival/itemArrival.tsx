import { useState } from "react";
import * as S from "./itemArrivalStyle"


type Props = {
    ImgSrc: string;
    ImgAlt: string;
    itemName: string;
    heartSrc: string;
    heartAlt: string;
    Description: string;
    Price: string;
    heartFill: string;
    onClick: () => void;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, heartAlt, heartSrc, itemName, heartFill, onClick }: Props) {
    const [heartStatus, setHeartStatus] = useState(true)
    return (
        <S.ItemArrival onClick={onClick}>
            <S.ImgProduct src={ImgSrc} alt={ImgAlt} />
            <S.InformationDiv>
                <S.NameHeart>
                    <S.ItemName>{itemName}</S.ItemName>
                    <S.Heart onClick={() => heartStatus ? setHeartStatus(false) : setHeartStatus(true)} src={heartStatus === true ? heartSrc : heartFill} alt={heartAlt} />
                </S.NameHeart>
                <S.ItemDescription>{Description}</S.ItemDescription>
                <S.ItemPrice>{Price}</S.ItemPrice>
            </S.InformationDiv>
        </S.ItemArrival>
    )
}