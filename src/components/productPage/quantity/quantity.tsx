import { useState } from "react"
import QuantityCounter from "./quantityCounter/quantityCounter"
import * as S from "./quantityStyle"


export default function Quantity() {
    const [counter, setCounter] = useState(1)

    return (
        <S.Quantity>
            <S.QuantityTitle>Quantity:</S.QuantityTitle>
            <QuantityCounter setState={setCounter} state={counter} />
        </S.Quantity>
    )
}