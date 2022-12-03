import QuantityCounter from "./quantityCounter/quantityCounter"
import * as S from "./quantityStyle"

type Props = {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

export default function Quantity({ state, setState }: Props) {

    return (
        <S.Quantity>
            <S.QuantityTitle>Quantity:</S.QuantityTitle>
            <QuantityCounter setState={setState} state={state} />
        </S.Quantity>
    )
}