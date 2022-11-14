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
            <S.ImgLogo src={imgLogo} alt="" />
            <S.NavCategory>
                <S.UlCategory>
                    <S.LiCategory>Handbags</S.LiCategory>
                    <S.LiCategory>Watches</S.LiCategory>
                    <S.LiCategory>Skincare</S.LiCategory>
                    <S.LiCategory>Jewellery</S.LiCategory>
                    <S.LiCategory>Apparels</S.LiCategory>
                </S.UlCategory>
            </S.NavCategory>
            <S.Input type="text" placeholder="Search for products or brands....." />
            <S.IconsContainer>
                <S.IconImg src={heart} alt="" />
                <S.IconImg src={profile} alt="" />
                <S.IconImg src={bag} alt="" />
            </S.IconsContainer>
            <S.TrailingIconsContainer>
                <S.IconImgMobile src={add} alt="" />
                <S.IconImgMobile src={notification} alt="" />
                <S.IconImgMobile src={search} alt="" />
            </S.TrailingIconsContainer>
        </S.HeaderContainer>
    )
}