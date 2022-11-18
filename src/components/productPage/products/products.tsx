import * as S from "./productsStyle"
import coach from "../../../assets/imgs/productPage/coach.png"
import viewSimilar from "../../../assets/imgs/productPage/viewSimilar.svg"

export default function Products() {
    return (
        <S.Products>
            <S.DivProductImage>
                <S.ProductImage src={coach} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={coach} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
            <S.DivProductImage>
                <S.ProductImage src={coach} alt="" />
                <S.DivSimilarProduct>
                    <S.ImgSimilar src={viewSimilar} alt="" />
                </S.DivSimilarProduct>
            </S.DivProductImage>
        </S.Products>
    )
}