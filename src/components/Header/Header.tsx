import * as S from "./HeaderStyle";
import menu from "../../assets/imgs/header/menu.svg"
import add from "../../assets/imgs/header/add.svg"
import notification from "../../assets/imgs/header/notification.svg"
import search from "../../assets/imgs/header/search.svg"
import imgLogo from "../../assets/imgs/header/imgLogo.svg"
import heart from "../../assets/imgs/header/heart.svg"
import profile from "../../assets/imgs/header/profile.svg"
import arrowLeft from "../../assets/imgs/header/arrowLeft.svg"
import bag from "../../assets/imgs/header/bag.svg"
import coach from "../../assets/imgs/header/coach.png"
import deleteImg from "../../assets/imgs/header/deleteImg.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuantityCounter from "../productPage/quantity/quantityCounter/quantityCounter";

export default function Header() {

    const [listCategory, setListCategory] = useState(false)
    const [inputSearchClick, setInputSearchClick] = useState(false)
    const [showCartInfo, setShowCartInfo] = useState(false)
    const navigate = useNavigate();

    return (
        <S.HeaderContainer>
            <S.MenuContainer>
                <S.MenuImg src={menu} alt="a hamburger menu with three lines" onClick={() => listCategory === true ? setListCategory(false) : setListCategory(true)} />
                <S.TitlePage>Home</S.TitlePage>
            </S.MenuContainer>
            {listCategory && <S.NavList>
                <S.ListUl>
                    <S.LinkCategory onClick={() => navigate("/handbags")}>
                        <S.LiCategory>Handbags</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/watches")}>
                        <S.LiCategory>Watches</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/skincare")}>
                        <S.LiCategory>Skincare</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/jewellery")}>
                        <S.LiCategory>Jewellery</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/apparels")}>
                        <S.LiCategory>Apparels</S.LiCategory>
                    </S.LinkCategory>
                </S.ListUl>
            </S.NavList>}
            <S.NavCategory>
                <S.LinkCategory onClick={() => navigate("/")}>
                    <S.ImgLogo src={imgLogo} alt="mark written Coral with a different font" />
                </S.LinkCategory>
                <S.UlCategory>
                    <S.LinkCategory onClick={() => navigate("/handbags")}>
                        <S.LiCategory>Handbags</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/watches")}>
                        <S.LiCategory>Watches</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/skincare")}>
                        <S.LiCategory>Skincare</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/jewellery")}>
                        <S.LiCategory>Jewellery</S.LiCategory>
                    </S.LinkCategory>
                    <S.LinkCategory onClick={() => navigate("/apparels")}>
                        <S.LiCategory>Apparels</S.LiCategory>
                    </S.LinkCategory>
                </S.UlCategory>
            </S.NavCategory>
            <S.IconsContainer>
                <S.Input type="text" placeholder="Search for products or brands..." />
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImg src={heart} alt="unfilled heart symbol" />
                </S.LinkCategory>
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImg src={profile} alt="icon of a person's head and shoulder" />
                </S.LinkCategory>
                <S.LinkCategory >
                    <S.IconImg onClick={() => showCartInfo ? setShowCartInfo(false) : setShowCartInfo(true)} src={bag} alt="a bag icon" />
                </S.LinkCategory>
            </S.IconsContainer>
            <S.TrailingIconsContainer>
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImgMobile src={add} alt="icon of a square with a plus in the middle" />
                </S.LinkCategory>
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImgMobile src={notification} alt="bell icon" />
                </S.LinkCategory>
                <S.LinkCategory onClick={() => inputSearchClick ? setInputSearchClick(false) : setInputSearchClick(true)}>
                    <S.IconImgMobile src={search} alt="magnifying glass icon" />
                </S.LinkCategory>
                {inputSearchClick && <S.DivInputSearch>
                    <S.InputSearch type="text" placeholder="Search for products or brands..." />
                </S.DivInputSearch>}
            </S.TrailingIconsContainer>
            {showCartInfo && <S.CartInfoContainer>
                <S.CartInfoDiv>
                    <S.AppBar>
                        <S.ImgBackArrow src={arrowLeft} alt="left arrow icon" onClick={() => setShowCartInfo(false)} />
                        <S.TitleAppBar>Back</S.TitleAppBar>
                    </S.AppBar>
                    <S.CardVerticalContainer>
                        <S.CardVertical>
                            <S.CardVerticalImgDiv>
                                <S.CardImg src={coach} alt="an orange leather bag" />
                            </S.CardVerticalImgDiv>
                            <S.ProductDescription>
                                <S.ProductTitle>Coach</S.ProductTitle>
                                <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                                <QuantityCounter />
                            </S.ProductDescription>
                            <S.PriceDeleteDiv>
                                <S.BtnDelete src={deleteImg} alt="an X icon" />
                                <S.PriceText>$54.69</S.PriceText>
                            </S.PriceDeleteDiv>
                        </S.CardVertical>
                        <S.Separator></S.Separator>
                        <S.CardVertical>
                            <S.CardVerticalImgDiv>
                                <S.CardImg src={coach} alt="an orange leather bag" />
                            </S.CardVerticalImgDiv>
                            <S.ProductDescription>
                                <S.ProductTitle>Coach</S.ProductTitle>
                                <S.ProductParagraph>Leather Coach Bag</S.ProductParagraph>
                                <QuantityCounter />
                            </S.ProductDescription>
                            <S.PriceDeleteDiv>
                                <S.BtnDelete src={deleteImg} alt="an X icon" />
                                <S.PriceText>$54.69</S.PriceText>
                            </S.PriceDeleteDiv>
                        </S.CardVertical>
                        <S.Separator></S.Separator>
                        <S.OrderDetailsDiv>
                            <S.OrderDetails>
                                <S.OrderTitle>Subtotal:</S.OrderTitle>
                                <S.OrderPrice>$109.38</S.OrderPrice>
                            </S.OrderDetails>
                            <S.OrderDetails>
                                <S.OrderTitle>Tax:</S.OrderTitle>
                                <S.OrderPrice>$2.00</S.OrderPrice>
                            </S.OrderDetails>
                            <S.OrderDetails>
                                <S.OrderResultTitle>Total:</S.OrderResultTitle>
                                <S.OrderResultValue>$111.38</S.OrderResultValue>
                            </S.OrderDetails>
                        </S.OrderDetailsDiv>
                        <S.CouponDiv>
                            <S.InputCode type="text" placeholder="Apply Coupon Code" />
                            <S.ButtonCheck>Check</S.ButtonCheck>
                        </S.CouponDiv>
                        <S.ButtonsDiv>
                            <S.PlaceOrderBtn>Place Order</S.PlaceOrderBtn>
                            <S.LinkContinue onClick={() => setShowCartInfo(false)}>
                                <S.ParagraphContinue >Continue Shopping</S.ParagraphContinue>
                            </S.LinkContinue>
                        </S.ButtonsDiv>
                    </S.CardVerticalContainer>
                </S.CartInfoDiv>
                <S.CarInfoDark onClick={() => setShowCartInfo(false)}></S.CarInfoDark>
            </S.CartInfoContainer>}
        </S.HeaderContainer >
    )
}