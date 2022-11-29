import * as S from "./addressStyle"
import pencilBtn from "@/assets/imgs/order/pencil-btn.svg"

type Props = {
    state: boolean;
    setState: (state: boolean) => void;
}

export default function Address({state, setState}: Props) {
    return (
        <S.AddressDiv>
            <S.AddressTitle>Deliver To</S.AddressTitle>
            <S.AddressInfo>
                <S.AddressContent>
                    <S.AddressInfoTitle>Ruby S Snively</S.AddressInfoTitle>
                    <S.AddressInfoDescription>1460 Jenric Lane, Ashmor Drive</S.AddressInfoDescription>
                </S.AddressContent>
                <S.AddressEditBtn onClick={() => setState(!state)} src={pencilBtn} alt="" />
            </S.AddressInfo>
        </S.AddressDiv>
    )
}