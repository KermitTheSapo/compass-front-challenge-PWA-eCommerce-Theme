import * as S from "./notificationStyle"
import arrow from "@/assets/imgs/notification/arrowLeft.svg"
import notification from "@/assets/imgs/notification/notification.svg"
import bannerImg from "@/assets/imgs/notification/bannerImg.png"
import { useNavigate } from "react-router-dom"
import Feedback from "./feedback/feedback"
import { Helmet } from "react-helmet"
export function Notification() {
    const navigate = useNavigate()
    return (
        <S.NotificationContainer>
            <Helmet>
                <title>Coral'l | Notification</title>
            </Helmet>
            <S.NotificationHeader>
                <S.LeadingIcon>
                    <S.ImgArrow src={arrow} alt="left arrow image" onClick={() => { navigate(-1) }} />
                    <S.NotificationTitle>Notification</S.NotificationTitle>
                </S.LeadingIcon>
                <S.ImgOptions src={notification} alt="bell icon" />
            </S.NotificationHeader>
            <S.BannerContainer>
                <S.ImgBanner src={bannerImg} alt="banner img" />
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