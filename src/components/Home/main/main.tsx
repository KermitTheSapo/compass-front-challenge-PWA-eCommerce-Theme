import * as S from "./mainStyle"
import Funk from "../../../assets/imgs/home/main/funk.png"
import Categories from "./categories/categories"
import Arrivals from "./Arrivals/arrivals"
import Handpicked from "./handpicked/handpicked"
import Brands from "./brands/brands"
import Makeup from "./makeup/makeup"
import Trending from "./trending/trending"
import Navigation from "./bottom-navigation/navigation"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import hero from "../../../assets/imgs/category/hero.png"
import makeup from "../../../assets/imgs/home/main/makeup/accessories.png"

export default function Main() {
    const navigate = useNavigate();

    const [bannerOne, setBannerOne] = useState(true)
    const [bannerTwo, setBannerTwo] = useState(false)
    const [bannerThree, setBannerThree] = useState(false)

    setInterval(() => {
        if (bannerOne) {
            setBannerOne(false)
            setBannerTwo(true)
        } else if (bannerTwo) {
            setBannerTwo(false)
            setBannerThree(true)
        } else if (bannerThree) {
            setBannerThree(false)
            setBannerOne(true)
        }
    }, 30000)

    return (
        <S.MainContainer>
            <S.AlertDiv>
                <S.AlertH3>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status</S.AlertH3>
                <S.AlertLink onClick={() => navigate("/error")}>here</S.AlertLink>
            </S.AlertDiv>
            <S.BannersCarrossel>
                <S.Banner src={Funk} alt="" />
                <S.Banner src={Funk} alt="" />
                <S.Banner src={Funk} alt="" />
            </S.BannersCarrossel>
            {bannerOne && <S.BannerDesktop>
                <S.CarryDiv>
                    <S.CarryTitle>Carry your Funk</S.CarryTitle>
                    <S.CarryParagraph>Trendy handbags collection for your party animal</S.CarryParagraph>
                    <a onClick={() => navigate("/")}>
                        <S.BtnBanner>See more</S.BtnBanner>
                    </a>
                </S.CarryDiv>
            </S.BannerDesktop>}
            {bannerTwo && <S.ImgBanner src={hero} alt="" />}
            {bannerThree && <S.ImgBanner src={makeup} alt="" />}
            <Categories />
            <Arrivals />
            <Handpicked />
            <Brands />
            <Makeup />
            <Trending />
            <Navigation />
        </S.MainContainer>
    )
}