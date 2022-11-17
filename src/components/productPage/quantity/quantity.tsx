import * as S from "./quantityStyle"

import minus from "../../../assets/imgs/productPage/minus.svg"
import plus from "../../../assets/imgs/productPage/plus.svg"
import { useState } from "react"

export default function Quantity() {

    const [quantity, setQuantity] = useState(1)

    return (
        <S.Quantity>
            <S.QuantityTitle>Quantity:</S.QuantityTitle>
            <S.QuantityCounter>
                <S.Img onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)} src={minus} alt="" />
                <S.QuantityNumber>{quantity}</S.QuantityNumber>
                <S.Img onClick={() => quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity)} src={plus} alt="" />
            </S.QuantityCounter>
        </S.Quantity>
    )
}