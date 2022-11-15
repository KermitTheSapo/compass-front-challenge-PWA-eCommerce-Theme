import * as S from "./mainStyle"
import Funk from "../../../assets/imgs/home/main/funk.png"
import Categories from "./categories/categories"
import Arrivals from "./Arrivals/arrivals"

export default function Main() {
    return (
        <S.MainContainer>
            <S.AlertDiv>
                <S.AlertH3>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status</S.AlertH3>
                <S.AlertLink href="/error">here</S.AlertLink>
            </S.AlertDiv>
            <S.Banner src={Funk} alt="" />
            <S.BannerDesktop>
                <S.CarryDiv>
                    <S.CarryTitle>Carry your Funk</S.CarryTitle>
                    <S.CarryParagraph>Trendy handbags collection for your party animal</S.CarryParagraph>
                    <a href="/error">
                        <S.BtnBanner>See more</S.BtnBanner>
                    </a>
                </S.CarryDiv>
            </S.BannerDesktop>
            <Categories />
            <Arrivals />
        </S.MainContainer>
    )
}