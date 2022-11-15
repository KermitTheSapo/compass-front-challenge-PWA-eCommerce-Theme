import * as S from "./itemArrivalStyle"


type Props = {
    ImgSrc: string;
    ImgAlt: string;
    itemName: string;
    heartSrc: string;
    heartAlt: string;
    Description: string;
    Price: string;
};
export default function ItemArrival({ Description, ImgAlt, ImgSrc, Price, heartAlt, heartSrc, itemName }: Props) {
    return (
        <S.ItemArrival>
            <S.ImgProduct src={ImgSrc} alt={ImgAlt} />
            <S.InformationDiv>
                <S.NameHeart>
                    <S.ItemName>{itemName}</S.ItemName>
                    <S.Heart src={heartSrc} alt={heartAlt} />
                </S.NameHeart>
                <S.ItemDescription>{Description}</S.ItemDescription>
                <S.ItemPrice>{Price}</S.ItemPrice>
            </S.InformationDiv>
        </S.ItemArrival>
    )
}