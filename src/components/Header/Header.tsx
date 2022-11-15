import * as S from "./HeaderStyle";
import menu from "../../assets/imgs/home/header/menu.svg"
import add from "../../assets/imgs/home/header/add.svg"
import notification from "../../assets/imgs/home/header/notification.svg"
import search from "../../assets/imgs/home/header/search.svg"
import imgLogo from "../../assets/imgs/home/header/imgLogo.svg"
import heart from "../../assets/imgs/home/header/heart.svg"
import profile from "../../assets/imgs/home/header/profile.svg"
import bag from "../../assets/imgs/home/header/bag.svg"

export default function Header() {
    return (
        <S.HeaderContainer>
            <S.MenuContainer>
                <S.MenuImg src={menu} alt="" />
                <S.TitlePage>Home</S.TitlePage>
            </S.MenuContainer>
            <S.NavCategory>
                <S.LinkCategory href="/error">
                    <S.ImgLogo src={imgLogo} alt="" />
                </S.LinkCategory>
                <S.UlCategory>
                    <S.LinkCategory href="/error">
                        <S.LiCategory>Handbags</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory href="/error">
                        <S.LiCategory>Watches</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory href="/error">
                        <S.LiCategory>Skincare</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory href="/error">
                        <S.LiCategory>Jewellery</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory href="/error">
                        <S.LiCategory>Apparels</S.LiCategory>
                    </S.LinkCategory>
                </S.UlCategory>
            </S.NavCategory>
            <S.IconsContainer>
                <S.Input type="text" placeholder="Search for products or brands....." />
                <S.LinkCategory href="/error">
                    <S.IconImg src={heart} alt="" />
                </S.LinkCategory>
                <S.LinkCategory href="/error">
                    <S.IconImg src={profile} alt="" />
                </S.LinkCategory>
                <S.LinkCategory href="/error">
                    <S.IconImg src={bag} alt="" />
                </S.LinkCategory>
            </S.IconsContainer>
            <S.TrailingIconsContainer>
                <S.LinkCategory href="/error">
                    <S.IconImgMobile src={add} alt="" />
                </S.LinkCategory>
                <S.LinkCategory href="/error">
                    <S.IconImgMobile src={notification} alt="" />
                </S.LinkCategory>
                <S.LinkCategory href="/error">
                    <S.IconImgMobile src={search} alt="" />
                </S.LinkCategory>
            </S.TrailingIconsContainer>
        </S.HeaderContainer>
    )
}