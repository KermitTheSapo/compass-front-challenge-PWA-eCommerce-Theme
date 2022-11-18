import * as S from "./productsStyle"
import viewSimilar from "../../../assets/imgs/productPage/viewSimilar.svg"

type Props = {
    imgCarousel: string;
}

export default function Products({ imgCarousel }: Props) {
    return (
        <S.Products>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={imgCarousel} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
        </S.Products>
    )
}