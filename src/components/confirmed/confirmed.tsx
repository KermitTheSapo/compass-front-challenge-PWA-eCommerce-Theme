import * as S from "./confirmedStyle"
import arrowBack from "@/assets/imgs/bag/cross.svg"
import confirmedArt from "@/assets/imgs/confirmed/art.svg"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function Confirmed() {
    const navigate = useNavigate()
    return (
        <S.ConfirmedContainer>
            <Helmet>
                <title>Coral'l | Confirmed</title>
            </Helmet>
            <S.ConfirmedHeader>
                <S.ImgBack src={arrowBack} alt="" onClick={() => navigate(-1)} />
                <S.ConfirmedTitle>Order Placed</S.ConfirmedTitle>
            </S.ConfirmedHeader>
            <S.ConfirmedAdvise>
                <S.ImgConfirmed src={confirmedArt} alt="" />
                <S.ConfirmedAdviseTitle>Cheerio!!</S.ConfirmedAdviseTitle>
                <S.ConfirmedAdviseText>The order has been placed. Thanks for shopping with us. You’ll soon receive the tracking details</S.ConfirmedAdviseText>
            </S.ConfirmedAdvise>
            <S.BtnActionsDiv>
                <S.btnView>View Order</S.btnView>
                <S.btnContinue>Continue Shopping</S.btnContinue>
            </S.BtnActionsDiv>
        </S.ConfirmedContainer>
    )
}