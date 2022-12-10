import * as S from "./reviewCardStlye"
import arrowOn from "@/assets/imgs/myReviews/arrowRight.svg"
import starOn from "@/assets/imgs/myReviews/starOn.svg"
import starOff from "@/assets/imgs/myReviews/starOff.svg"


export default function ReviewCard() {
    return (
        <S.ReviewCard>
            <S.ReviewCardContent>
                <S.Date>12 August 2020</S.Date>
                <S.StarDiv>
                    <img src={starOn} alt="yellow star icon" />
                    <img src={starOn} alt="yellow star icon" />
                    <img src={starOn} alt="yellow star icon" />
                    <img src={starOn} alt="yellow star icon" />
                    <img src={starOff} alt="star off icon" />
                </S.StarDiv>
                <S.Title>GUCCI Colbar Handbag</S.Title>
                <S.Paragraph>Quality product with awesome accessories</S.Paragraph>
                <S.Description>Quality product with awesome accessories Quality product accessories ......</S.Description>
            </S.ReviewCardContent>
            <S.ImgArrow src={arrowOn} alt="right arrow" />
        </S.ReviewCard>
    )
}