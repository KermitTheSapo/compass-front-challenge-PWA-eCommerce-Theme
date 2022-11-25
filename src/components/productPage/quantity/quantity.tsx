import QuantityCounter from "./quantityCounter/quantityCounter"
import * as S from "./quantityStyle"


export default function Quantity() {


    return (
        <S.Quantity>
            <S.QuantityTitle>Quantity:</S.QuantityTitle>
            <QuantityCounter  />
        </S.Quantity>
    )
}