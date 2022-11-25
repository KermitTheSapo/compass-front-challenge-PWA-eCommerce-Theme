import * as S from "./quantityCounterStyle"
import minus from "@/assets/imgs/productPage/minus.svg"
import plus from "@/assets/imgs/productPage/plus.svg"

type Props = {
    setState: React.Dispatch<React.SetStateAction<number>>;
    state: number;
}

export default function QuantityCounter({ setState, state }: Props) {
    const addQuantity = () => {
        state > 1 ? setState(state - 1) : setState(state)
    }
    const removeQuantity = () => {
        state < 10 ? setState(state + 1) : setState(state)
    }

    return (
        <S.QuantityCounter>
            <S.Img onClick={() => { addQuantity() }} src={minus} alt="a plus icon" />
            <S.QuantityNumber>{state}</S.QuantityNumber>
            <S.Img onClick={() => { removeQuantity() }} src={plus} alt="a minus icon" />
        </S.QuantityCounter>
    )
}