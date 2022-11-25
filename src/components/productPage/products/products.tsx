import * as S from "./productsStyle"
import viewSimilar from "@/assets/imgs/productPage/viewSimilar.svg"
import { useState } from "react";
import AlsoLikeItem from "../alsoLike/alsoLikeItem/alsoLikeItem";
type Props = {
    imgCarousel: string;
}

export default function Products({ imgCarousel }: Props) {
    const [showSimilarProducts, setShowSimilarProducts] = useState(false)
    return (
        <S.Products>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="carousel image" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="3 cards next to each other" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="carousel image" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="3 cards next to each other" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="carousel image" />
                <S.DivSimilarProduct onClick={() => showSimilarProducts ? setShowSimilarProducts(false) : setShowSimilarProducts(true)}>
                    <S.ImgSimilar src={viewSimilar} alt="3 cards next to each other" />
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
                        <AlsoLikeItem value={false} />
                    </S.BottomSheetBody>
                </S.BottomSheetContent>
            </S.BottomSheetContainer>}
        </S.Products >
    )
}