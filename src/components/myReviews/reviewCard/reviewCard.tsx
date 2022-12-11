import * as S from "./reviewCardStlye"
import arrowOn from "@/assets/imgs/myReviews/arrowRight.svg"
import starOn from "@/assets/imgs/myReviews/starOn.svg"
import starOff from "@/assets/imgs/myReviews/starOff.svg"

type Props = {
    date: string,
    title: string,
    paragraph: string,
    description: string,
    rating: string
}

export default function ReviewCard({ date, title, paragraph, description, rating }: Props) {
    return (
        <S.ReviewCard>
            <S.ReviewCardContent>
                <S.Date>{date}</S.Date>
                <S.StarDiv>
                    {
                        rating === "1" && <>
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="star off icon" />
                        </>
                    }
                    {
                        rating === "2" && <>
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="star off icon" />
                        </>
                    }
                    {
                        rating === "3" && <>
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOff} alt="yellow star icon" />
                            <img src={starOff} alt="star off icon" />
                        </>
                    }
                    {
                        rating === "4" && <>
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOff} alt="star off icon" />
                        </>
                    }
                    {
                        rating === "5" && <>
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="yellow star icon" />
                            <img src={starOn} alt="star off icon" />
                        </>
                    }

                </S.StarDiv>
                <S.Title>{title}</S.Title>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <S.Description>{description}</S.Description>
            </S.ReviewCardContent>
            <S.ImgArrow src={arrowOn} alt="right arrow" />
        </S.ReviewCard>
    )
}