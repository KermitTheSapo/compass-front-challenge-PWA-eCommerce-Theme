import * as S from "./bottomSheetHomeStyle"

import star from "../../../../../assets/imgs/home/main/arrivals/star.png"
import arrow from "../../../../../assets/imgs/home/main/arrivals/arrowLeft.svg"
import placeholder from "../../../../../assets/imgs/home/main/arrivals/placeholder.svg"
import ButtonAdd from "./buttonAdd/buttonAdd"

type Props = {
    name: string;
    description: string;
    price: string;
    img: string;
}

export default function BottomSheetHome({ name, description, price, img }: Props) {
    return (
        <S.BottomSheetHomeContainer>
            <S.SheetHeader>
                <S.Img src={img} alt="" />
                <S.ContentTitle>
                    <S.Title>{name}</S.Title>
                    <S.Description>{description}</S.Description>
                    <S.Price>{price}</S.Price>
                </S.ContentTitle>
            </S.SheetHeader>
            <S.AverageDiv>
                <S.ImgStar src={star} alt="" />
                <S.AverageContent>
                    <S.AverageTitle>Average Rating</S.AverageTitle>
                    <S.AverageParagraph>Average Rating</S.AverageParagraph>
                </S.AverageContent>
                <S.Arrow src={arrow} alt="" />
            </S.AverageDiv>
            <S.SelectSize>
                <S.SizeContent>
                    <S.SelectSizeTitle>Select Size</S.SelectSizeTitle>
                    <S.SelectSizeParagraph>(UK Size)</S.SelectSizeParagraph>
                </S.SizeContent>
                <S.SizeTabs>
                    <S.Tab>7</S.Tab>
                    <S.Tab>8</S.Tab>
                    <S.Tab>9</S.Tab>
                    <S.Tab>10</S.Tab>
                </S.SizeTabs>
            </S.SelectSize>
            <S.Buttons>
                <S.ImgPlaceHolderDiv>
                    <img src={placeholder} alt="" />
                </S.ImgPlaceHolderDiv>
                <ButtonAdd />
            </S.Buttons>
        </S.BottomSheetHomeContainer>
    )
}