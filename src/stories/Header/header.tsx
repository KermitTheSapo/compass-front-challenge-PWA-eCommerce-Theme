import menu from "../../assets/imgs/header/menu.svg"
import add from "../../assets/imgs/header/add.svg"
import notification from "../../assets/imgs/header/notification.svg"
import search from "../../assets/imgs/header/search.svg"
import imgLogo from "../../assets/imgs/header/imgLogo.svg"
import heart from "../../assets/imgs/header/heart.svg"
import profile from "../../assets/imgs/header/profile.svg"
import bag from "../../assets/imgs/header/bag.svg"
import * as S from "./headerStyle"
import { Reset } from "../../assets/styles/reset"

export const Header = () => (
    <S.HeaderContainer>
        <Reset />
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
            <S.Input type="text" placeholder="Search for products or brands..." />
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
);