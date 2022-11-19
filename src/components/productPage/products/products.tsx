import * as S from "./productsStyle"
import viewSimilar from "../../../assets/imgs/productPage/viewSimilar.svg"
import { useState } from "react";
import AlsoLikeItem from "../alsoLike/alsoLikeItem/alsoLikeItem";

import grande from "../../../assets/imgs/home/main/arrivals/grande.png"
import boker from "../../../assets/imgs/home/main/arrivals/boker.png"
import coach from "../../../assets/imgs/productPage/coach.png"
import remus from "../../../assets/imgs/remus/remus.png"
import boujee from "../../../assets/imgs/boujee/boujee.png"

type Props = {
    imgCarousel: string;
}

export default function Products({ imgCarousel }: Props) {
    const [showSimilarProducts, setShowSimilarProducts] = useState(false)
    return (
        <S.Products>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            {showSimilarProducts && <S.BottomSheetContainer>
                <S.BottomSheetDark onClick={() => setShowSimilarProducts(false)}></S.BottomSheetDark>
                <S.BottomSheetContent>
                    <S.BottomSheetHeader>
                        <S.BottomSheetTitle>You may also like</S.BottomSheetTitle>
                        <S.SeparatorDiv></S.SeparatorDiv>
                    </S.BottomSheetHeader>
                    <S.BottomSheetBody>
                        <AlsoLikeItem imgSrc={grande} imgAlt={""} itemName={"Grande"} description={"Blossom Pouch"} price={"$39.49"} link={"/grande"} />
                        <AlsoLikeItem imgSrc={boker} imgAlt={""} itemName={"Boker"} description={"Blossom"} price={"$34.55"} link={"/boker"} />
                        <AlsoLikeItem imgSrc={coach} imgAlt={""} itemName={"Coach"} description={"Leather Coach Bag"} price={"$54.69"} link={"/coach"} />
                        <AlsoLikeItem imgSrc={remus} imgAlt={""} itemName={"Remus"} description={"Brown Strap Bag"} price={"$57.00"} link={"/remus"} />
                        <AlsoLikeItem imgSrc={boujee} imgAlt={""} itemName={"Boujee"} description={"Black Bag"} price={"$56.49"} link={"/boujee"} />
                    </S.BottomSheetBody>
                </S.BottomSheetContent>
            </S.BottomSheetContainer>}
        </S.Products >
    )
}