import * as S from "./notificationStyle"
import arrow from "@/assets/imgs/notification/arrowLeft.svg"
import notification from "@/assets/imgs/notification/notification.svg"
import bannerImg from "@/assets/imgs/notification/bannerImg.png"
import { useNavigate } from "react-router-dom"
import Feedback from "./feedback/feedback"
export function Notification() {
    const navigate = useNavigate()
    return (
        <S.NotificationContainer>
            <S.NotificationHeader>
                <S.LeadingIcon>
                    <S.ImgArrow src={arrow} alt="" onClick={() => { navigate(-1) }} />
                    <S.NotificationTitle>Notification</S.NotificationTitle>
                </S.LeadingIcon>
                <S.ImgOptions src={notification} alt="" />
            </S.NotificationHeader>
            <S.BannerContainer>
                <S.ImgBanner src={bannerImg} alt="" />
                <S.BannerTitle>Upto 50% OFF⚡⚡</S.BannerTitle>
                <S.BannerParagraph>This winter gift your loved ones.</S.BannerParagraph>
                <S.BannerBtn>Shop Now</S.BannerBtn>
            </S.BannerContainer>
            <S.FeedbackContainer>
                <Feedback />
                <Feedback />
            </S.FeedbackContainer>
        </S.NotificationContainer>
    )
}