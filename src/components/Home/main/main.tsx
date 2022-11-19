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
    const changeBanner = () => {
        if (bannerOne) {
            setBannerOne(false)
            setBannerTwo(true)
            return;
        } else if (bannerTwo) {
            setBannerTwo(false)
            setBannerThree(true)
            return;
        } else if (bannerThree) {
            setBannerThree(false)
            setBannerOne(true)
            return;
        }
    }
    setInterval(() => {
        changeBanner()
    }, 30000)

    return (
        <S.MainContainer>
            <S.AlertDiv>
                <S.AlertH3>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status</S.AlertH3>
                <S.AlertLink onClick={() => navigate("/error")}>here</S.AlertLink>
            </S.AlertDiv>
            <S.BannersCarrossel>
                <S.Banner src={Funk} alt="image of a person with a pink bag near a brick wall" />
                <S.Banner src={Funk} alt="image of a person with a pink bag near a brick wall" />
                <S.Banner src={Funk} alt="image of a person with a pink bag near a brick wall" />
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
            {bannerTwo && <S.ImgBanner src={hero} alt="an image of a black bag with a black tag written black friday on a white background with a written title saying 70% off black friday" />}
            {bannerThree && <S.ImgBanner src={makeup} alt="image of a table with various makeup" />}
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