import * as S from "./addressStyle"
import arrowBack from "@/assets/imgs/bag/back.svg"
import wishlist from "@/assets/imgs/wishlist/art.svg"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function Address() {
    const navigate = useNavigate()
    return (
        <S.ConfirmedContainer>
            <Helmet>
                <title>Coral'l | Address</title>
            </Helmet>
            <S.ConfirmedHeader>
                <S.ImgBack src={arrowBack} alt="an arrow to the left" onClick={() => navigate(-1)} />
                <S.ConfirmedTitle>My Address Book</S.ConfirmedTitle>
            </S.ConfirmedHeader>
            <S.ConfirmedAdvise>
                <S.ImgConfirmed src={wishlist} alt="" />
                <S.ConfirmedAdviseTitle>No Address</S.ConfirmedAdviseTitle>
                <S.ConfirmedAdviseText>It seems you have not updated your address yet.</S.ConfirmedAdviseText>
            </S.ConfirmedAdvise>
            <S.BtnActionsDiv>
                <S.btnContinue>Add Address</S.btnContinue>
            </S.BtnActionsDiv>
        </S.ConfirmedContainer>
    )
}