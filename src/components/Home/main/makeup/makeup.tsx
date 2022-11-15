import * as S from "./makeupStyle"

import brownArrow from "../../../../assets/imgs/home/main/makeup/brownArrow.svg"
import pinkArrow from "../../../../assets/imgs/home/main/makeup/pinkArrow.svg"
import GreenArrow from "../../../../assets/imgs/home/main/makeup/GreenArrow.svg"

export default function Makeup() {
    return (
        <S.MakeupContainer>
            <S.Title>Makeup & Skincare</S.Title>
            <S.Banners>
                <S.LifestyleDiv>
                    <S.Paragraph>LIFESTYLE</S.Paragraph>
                    <S.Name>Makeup Accessories from Top Brands</S.Name>
                    <S.LinkCirclePrimary href="/error">
                        <S.CirclePrimary>
                            <S.Arrow src={brownArrow} alt="" />
                        </S.CirclePrimary>
                    </S.LinkCirclePrimary>
                </S.LifestyleDiv>
                <S.BannersSecondary>
                    <S.SkincareDiv>
                        <S.NameSecondary>Skincare Essentials</S.NameSecondary>
                        <S.LinkCircle href="/error">
                            <S.CircleSkincare>
                                <S.Arrow src={pinkArrow} alt="" />
                            </S.CircleSkincare>
                        </S.LinkCircle>
                    </S.SkincareDiv>
                    <S.FacePacksDiv>
                        <S.NameFacePacks>Facepacks & Peels</S.NameFacePacks>
                        <S.LinkCircle href="/error">
                            <S.CircleFacepacks>
                                <S.Arrow src={GreenArrow} alt="" />
                            </S.CircleFacepacks>
                        </S.LinkCircle>
                    </S.FacePacksDiv>
                </S.BannersSecondary>
            </S.Banners>
        </S.MakeupContainer>
    )
}