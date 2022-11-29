import * as S from "./HeaderStyle";
import menu from "@/assets/imgs/header/menu.svg"
import add from "@/assets/imgs/header/add.svg"
import notification from "@/assets/imgs/header/notification.svg"
import notificationOn from "@/assets/imgs/header/notification-on.svg"
import search from "@/assets/imgs/header/search.svg"
import imgLogo from "@/assets/imgs/header/imgLogo.svg"
import heart from "@/assets/imgs/header/heart.svg"
import profile from "@/assets/imgs/header/profile.svg"
import arrowLeft from "@/assets/imgs/header/arrowLeft.svg"
import bag from "@/assets/imgs/header/bag.svg"
import bagNotification from "@/assets/imgs/header/bag-notification.svg"
import { Key, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardVertical from "./cardVertical/cardVertical";

export default function Header() {
    const [listCategory, setListCategory] = useState(false)
    const [showCartInfo, setShowCartInfo] = useState(false)
    const [price, setPrice] = useState(0)
    const [tax, setTax] = useState(2)
    const navigate = useNavigate();
    const bagInfo = localStorage.getItem("items")
    const bagInfoParse = JSON.parse(bagInfo)
    const openCartInfo = () => {
        if (showCartInfo) {
            setShowCartInfo(false)
        } else {
            setShowCartInfo(true)
            setPrice(0)
            setTax(0)
        }
        const bagInfo = localStorage.getItem("items")
        const bagInfoParse = JSON.parse(bagInfo)
        if (bagInfoParse !== null) {
            setTax(2)
        }
        let value = 0
        bagInfoParse.map((item: { price: number; }) => { value = value + item.price });
        setPrice(value)
        value = 0;
    }
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
                    <S.IconImg onClick={() => openCartInfo()} src={bagInfoParse === null ? bag : bagNotification} alt="a bag icon" />
                </S.LinkCategory>
            </S.IconsContainer>
            <S.TrailingIconsContainer>
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImgMobile src={add} alt="icon of a square with a plus in the middle" />
                </S.LinkCategory>
                <S.LinkCategory onClick={() => navigate("/search")}>
                    <S.IconImgMobile src={search} alt="magnifying glass icon" />
                </S.LinkCategory>
                <S.LinkCategory onClick={() => navigate("/error")}>
                    <S.IconImgMobile src={bagInfoParse === null ? notification : notificationOn} alt="bell icon" />
                </S.LinkCategory>
            </S.TrailingIconsContainer>
            {showCartInfo && <S.CartInfoContainer>
                <S.CartInfoDiv>
                    <S.AppBar>
                        <S.ImgBackArrow src={arrowLeft} alt="left arrow icon" onClick={() => setShowCartInfo(false)} />
                        <S.TitleAppBar>Back</S.TitleAppBar>
                    </S.AppBar>
                    <S.CardVerticalContainer>
                        <S.DivCardProducts>
                            {bagInfoParse === null && <S.DivBagEmpty><p>The Bag is empty :(</p></S.DivBagEmpty>}
                            {bagInfoParse && bagInfoParse.map((item: any, key: Key | null | undefined) => (
                                <div key={key}>
                                    < CardVertical productTitle={item.name} productParagraph={item.description} productPrice={item.price} img={item.img} />
                                    <S.Separator></S.Separator>
                                </div>
                            ))}
                        </S.DivCardProducts>
                        <S.OrderDetailsDiv>
                            <S.OrderDetails>
                                <S.OrderTitle>Subtotal:</S.OrderTitle>
                                <S.OrderPrice>${price.toFixed(2)}</S.OrderPrice>
                            </S.OrderDetails>
                            <S.OrderDetails>
                                <S.OrderTitle>Tax:</S.OrderTitle>
                                <S.OrderPrice>${tax}</S.OrderPrice>
                            </S.OrderDetails>
                            <S.OrderDetails>
                                <S.OrderResultTitle>Total:</S.OrderResultTitle>
                                <S.OrderResultValue>${price + tax}</S.OrderResultValue>
                            </S.OrderDetails>
                        </S.OrderDetailsDiv>
                        <S.CouponDiv>
                            <S.InputCode type="text" placeholder="Apply Coupon Code" />
                            <S.ButtonCheck>Check</S.ButtonCheck>
                        </S.CouponDiv>
                        <S.ButtonsDiv>
                            <S.PlaceOrderBtn onClick={() => navigate("/myCart")}>Place Order</S.PlaceOrderBtn>
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