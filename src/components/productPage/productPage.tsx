import * as S from "./productPageStyle"

import arrow from "../../assets/imgs/productPage/arrowLeft.svg"
import heart from "../../assets/imgs/productPage/heart.svg"
import arrowRight from "../../assets/imgs/productPage/arrow-right.svg"
import arrowRightMini from "../../assets/imgs/productPage/arrow-right-mini.svg"
import productsPics from "../../assets/imgs/productPage/productPics.png"
import ImgSmallPic from "../../assets/imgs/productPage/coach.png"

import Products from "./products/products"
import ProductInfo from "./productInfo/productInfo"
import DeliveryDetails from "./deliveryDetails/deliveryDetails"
import ProductDescription from "./productDescription/productDescription"
import RatingReviews from "./ratingsReviews/ratingReviews"
import InviteFriends from "./inviteFriends/inviteFriends"
import AlsoLike from "./alsoLike/alsoLike"
import Header from "../Header/Header"
import Quantity from "./quantity/quantity"
import Buttons from "./buttons/buttons"
import ProductDescriptionDesktop from "./productDescriptionDesktop/productDescriptionDesktop"
import Footer from "../footer/footer"

export default function ProductPage() {
    return (
        <S.ProductPageContainer>
            <Header />
            <S.Header>
                <S.LinkArrow href="/">
                    <S.ImgArrow src={arrow} alt="" />
                </S.LinkArrow>
            </S.Header>
            <S.BreadCrumb>
                <S.BreadCrumbRouteOn>Home</S.BreadCrumbRouteOn>
                <S.ArrowRightMini src={arrowRightMini} alt="" />
                <S.BreadCrumbRouteOn>Handbag</S.BreadCrumbRouteOn>
                <S.ArrowRightMini src={arrowRightMini} alt="" />
                <S.BreadCrumbRouteOff>Label</S.BreadCrumbRouteOff>
            </S.BreadCrumb>
            <S.PicsContent>
                <S.ProductsPics>
                    <S.ImgPics src={productsPics} alt="" />
                    <S.ProductPhotos>
                        <S.ProductArrow>
                            <img src={arrow} alt="" />
                        </S.ProductArrow>
                        <S.ImgSmallDiv>
                            <S.ImgSmallPic src={ImgSmallPic} alt="" />
                            <S.ImgSmallPic src={ImgSmallPic} alt="" />
                            <S.ImgSmallPic src={ImgSmallPic} alt="" />
                            <S.ImgSmallPic src={ImgSmallPic} alt="" />
                        </S.ImgSmallDiv>
                        <S.ProductArrow>
                            <img src={arrowRight} alt="" />
                        </S.ProductArrow>
                    </S.ProductPhotos>
                </S.ProductsPics>
                <S.Content>
                    <Products />
                    <ProductInfo />
                    <DeliveryDetails />
                    <Quantity />
                    <Buttons />
                    <S.Separator></S.Separator>
                    <ProductDescription />
                    <S.Separator></S.Separator>
                    <RatingReviews />
                    <S.Separator></S.Separator>
                    <InviteFriends />
                    <S.Separator></S.Separator>
                    <AlsoLike />
                </S.Content>
            </S.PicsContent>
            <ProductDescriptionDesktop />
            {window.screen.width > 768 && <Footer />}
            <S.FooterNav>
                <S.heartDiv>
                    <S.ImgHeart src={heart} alt="" />
                </S.heartDiv>
                <S.ButtonAdd>Add to Bag</S.ButtonAdd>
            </S.FooterNav>
        </S.ProductPageContainer>
    )
}