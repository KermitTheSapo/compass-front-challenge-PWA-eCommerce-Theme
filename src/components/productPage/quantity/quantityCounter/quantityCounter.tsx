import * as S from "./quantityCounterStyle"
import minus from "../../../../assets/imgs/productPage/minus.svg"
import plus from "../../../../assets/imgs/productPage/plus.svg"
import { useState } from "react"

export default function QuantityCounter() {
    const [quantity, setQuantity] = useState(1)

    return (
        <S.QuantityCounter>
            <S.Img onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity)} src={minus} alt="a plus icon" />
            <S.QuantityNumber>{quantity}</S.QuantityNumber>
            <S.Img onClick={() => quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity)} src={plus} alt="a minus icon" />
        </S.QuantityCounter>
    )
}