import { Reset } from "../../assets/styles/reset"
import * as S from "./assemblyStyle"
import bigBanner from "../assets/assembly/bigBanner.svg"
import smallBanner from "../assets/assembly/smallBanner.png"

export default function Assembly() {
    return (
        <S.AssemblyContainer>
            <Reset />
            <S.bannerWide>
                <S.ImgBigBanner src={bigBanner} alt="" />
                <S.ImgBigBanner src={bigBanner} alt="" />
                <S.ImgBigBanner src={bigBanner} alt="" />
            </S.bannerWide>
            <S.BannerSquare>
                <S.ImgSmallBanner src={smallBanner} alt="" />
                <S.ImgSmallBanner src={smallBanner} alt="" />
                <S.ImgSmallBanner src={smallBanner} alt="" />
                <S.ImgSmallBanner src={smallBanner} alt="" />
            </S.BannerSquare>
            <S.BannerHybrid>
                <S.ImgBigBanner src={bigBanner} alt="" />
                <S.ImgSmallBanner src={smallBanner} alt="" />
                <S.ImgSmallBanner src={smallBanner} alt="" />
            </S.BannerHybrid>
        </S.AssemblyContainer>
    )
}

