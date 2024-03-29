import * as S from "./makeupStyle"

import brownArrow from "@/assets/imgs/home/main/makeup/brownArrow.svg"
import pinkArrow from "@/assets/imgs/home/main/makeup/pinkArrow.svg"
import GreenArrow from "@/assets/imgs/home/main/makeup/greenArrow.svg"
import { useNavigate } from "react-router-dom";

export default function Makeup() {

    const navigate = useNavigate();

    return (
        <S.MakeupContainer>
            <S.Title>Makeup & Skincare</S.Title>
            <S.Banners>
                <S.LifestyleDiv>
                    <S.Paragraph>LIFESTYLE</S.Paragraph>
                    <S.Name>Makeup Accessories from Top Brands</S.Name>
                    <S.LinkCirclePrimary onClick={() => navigate("/error")}>
                        <S.CirclePrimary>
                            <S.Arrow src={brownArrow} alt="a brown right arrow" />
                        </S.CirclePrimary>
                    </S.LinkCirclePrimary>
                </S.LifestyleDiv>
                <S.BannersSecondary>
                    <S.SkincareDiv>
                        <S.NameSecondary>Skincare Essentials</S.NameSecondary>
                        <S.LinkCircle onClick={() => navigate("/error")}>
                            <S.CircleSkincare>
                                <S.Arrow src={pinkArrow} alt="a pink right arrow" />
                            </S.CircleSkincare>
                        </S.LinkCircle>
                    </S.SkincareDiv>
                    <S.FacePacksDiv>
                        <S.NameFacePacks>Facepacks & Peels</S.NameFacePacks>
                        <S.LinkCircle onClick={() => navigate("/error")}>
                            <S.CircleFacepacks>
                                <S.Arrow src={GreenArrow} alt="a green right arrow" />
                            </S.CircleFacepacks>
                        </S.LinkCircle>
                    </S.FacePacksDiv>
                </S.BannersSecondary>
            </S.Banners>
        </S.MakeupContainer>
    )
}