import * as S from "./productPageStyle"

import arrow from "@/assets/imgs/productPage/arrowLeft.svg"
import heart from "@/assets/imgs/productPage/heart.svg"
import arrowRight from "@/assets/imgs/productPage/arrow-right.svg"
import arrowRightMini from "@/assets/imgs/productPage/arrow-right-mini.svg"
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
import { useNavigate } from "react-router-dom"
import { postBag } from "../../products/bag"
import { useEffect, useState } from "react"

type Props = {
    name: string;
    value: number;
    img: string;
    productDescription: string;
    productParagraph: string;
    safe: number;
    discount: number;
    imgCarousel: string;
    ratings: number;
    _id: string;
}

export default function ProductPage({ img, name, productDescription, value, productParagraph, safe, discount, imgCarousel, ratings, _id }: Props) {
    const [id, setId] = useState("")
    const addToApiStorage = (counter: number) => {
        const product = {
            name: name,
            paragraph: productDescription,
            description: productParagraph,
            price: value,
            subTotal: value,
            safe: safe,
            discount: discount,
            link: "link",
            imgAlt: "imgAlt",
            image: img,
            ratings: ratings,
            quantity: counter
        }
        postBag(product)
        alert("Item added to cart")
    }
    const getId = () => {
        // @ts-ignore
        let params = new URL(document.location).searchParams;
        setId(params.get("id") as string)
    }
    useEffect(() => {
        getId()
    }, [id])
    const navigate = useNavigate()
    const [counter, setCounter] = useState(1)
    return (
        <S.ProductPageContainer>
            <Header />
            <S.Header>
                <S.LinkArrow onClick={() => navigate(-1)}>
                    <S.ImgArrow src={arrow} alt="left arrow icon" />
                </S.LinkArrow>
            </S.Header>
            <S.BreadCrumb>
                <S.BreadCrumbRouteOn>Home</S.BreadCrumbRouteOn>
                <S.ArrowRightMini src={arrowRightMini} alt="a small arrow to the right" />
                <S.BreadCrumbRouteOn>Handbag</S.BreadCrumbRouteOn>
                <S.ArrowRightMini src={arrowRightMini} alt="a small arrow to the right" />
                <S.BreadCrumbRouteOff>{name}</S.BreadCrumbRouteOff>
            </S.BreadCrumb>
            <S.PicsContent>
                <S.ProductsPics>
                    <S.ImgPics src={img} alt="large image of a product" />
                    <S.ProductPhotos>
                        <S.ProductArrow>
                            <img src={arrow} alt="large image of a product" />
                        </S.ProductArrow>
                        <S.ImgSmallDiv>
                            <S.ImgSmallPic src={img} alt="small images" />
                            <S.ImgSmallPic src={img} alt="small images" />
                            <S.ImgSmallPic src={img} alt="small images" />
                            <S.ImgSmallPic src={img} alt="small images" />
                        </S.ImgSmallDiv>
                        <S.ProductArrow>
                            <img src={arrowRight} alt="right arrow" />
                        </S.ProductArrow>
                    </S.ProductPhotos>
                </S.ProductsPics>
                <S.Content>
                    <Products imgCarousel={imgCarousel} />
                    <ProductInfo name={name} value={value * counter} productParagraph={productParagraph} safe={safe} discount={discount} id={_id} />
                    <DeliveryDetails />
                    <Quantity state={counter} setState={setCounter} />
                    <Buttons onClick={() => addToApiStorage(counter)} />
                    <S.Separator></S.Separator>
                    <ProductDescription />
                    <S.Separator></S.Separator>
                    <RatingReviews id={id} />
                    <S.Separator></S.Separator>
                    <InviteFriends />
                    <S.Separator></S.Separator>
                    <AlsoLike />
                </S.Content>
            </S.PicsContent>
            <ProductDescriptionDesktop productDescription={productDescription} />
            {window.screen.width > 768 && <Footer />}
            <S.FooterNav>
                <S.heartDiv>
                    <S.ImgHeart src={heart} alt="heart icon" />
                </S.heartDiv>
                <S.ButtonAdd onClick={() => addToApiStorage(counter)}>Add to Bag</S.ButtonAdd>
            </S.FooterNav>
        </S.ProductPageContainer>
    )
}