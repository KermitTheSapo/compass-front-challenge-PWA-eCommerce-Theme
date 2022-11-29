import * as S from "./searchErrorStyle"
import arrowBack from "@/assets/imgs/bag/back.svg"

import art from "@/assets/imgs/searchError/searchArt.svg"

import options from "@/assets/imgs/searchError/options.svg"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
export default function SearchError() {
    const navigate = useNavigate()
    return (
        <S.ConfirmedContainer>
            <Helmet>
                <title>Coral'l | SearchError</title>
            </Helmet>
            <S.ConfirmedHeader>
                <S.LeadingIcon>
                    <S.ImgBack src={arrowBack} alt="" onClick={() => navigate(-1)} />
                    <S.ConfirmedTitle>Search results</S.ConfirmedTitle>
                </S.LeadingIcon>
                <img src={options} alt="" />
            </S.ConfirmedHeader>
            <S.ConfirmedAdvise>
                <S.ImgConfirmed src={art} alt="" />
                <S.ConfirmedAdviseTitle>Whoops!</S.ConfirmedAdviseTitle>
                <S.ConfirmedAdviseText>We couldn't find what you’re looking for. Try something else.</S.ConfirmedAdviseText>
            </S.ConfirmedAdvise>
            <S.BtnActionsDiv>
                <S.btnContinue onClick={() => navigate("/")}>Back to home</S.btnContinue>
            </S.BtnActionsDiv>
        </S.ConfirmedContainer>
    )
}