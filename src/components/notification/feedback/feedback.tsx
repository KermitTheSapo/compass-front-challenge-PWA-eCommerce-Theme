import * as S from "./feedbackStyle"

import like from "@/assets/imgs/notification/like.svg"

export default function Feedback() {
    return (
        <S.FeedbackContainer>
            <S.ImgLike src={like} alt="like icon" />
            <S.FeedbackTitle>Feedback</S.FeedbackTitle>
            <S.FeedbackParagraph>Hey, Tina. Thanks for using CORAL. You know what? You can help us improve with just one click</S.FeedbackParagraph>
        </S.FeedbackContainer>
    )
}