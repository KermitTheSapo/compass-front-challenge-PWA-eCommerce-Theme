import * as S from "./productsStyle"
import coach from "../../../assets/imgs/productPage/coach.png"

export default function Products() {
    return (
        <S.Products>
            <S.ProductImage src={coach} alt="" />
            <S.ProductImage src={coach} alt="" />
            <S.ProductImage src={coach} alt="" />
        </S.Products>
    )
}