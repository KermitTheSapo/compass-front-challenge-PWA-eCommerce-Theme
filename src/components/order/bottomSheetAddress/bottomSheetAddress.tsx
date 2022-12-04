import * as S from "./bottomSheetAddressStyle"
import plus from "@/assets/imgs/order/plus.svg"
import AddressCard from "./addressCard/addressCard"
import { useNavigate } from "react-router-dom"
type Props = {
    state: boolean
    setState: (state: boolean) => void
}


export default function BottomSheetAddress({ state, setState }: Props) {
    const navigate = useNavigate()
    return (
        <>
            <S.AddressDark onClick={() => setState(!state)}></S.AddressDark>
            <S.SelectAddressContainer>
                <S.SelectAddressHeader>
                    <S.AddressTitle>Select Delivery Address</S.AddressTitle>
                    <S.AddAddressDiv>
                        <S.ImgAdd src={plus} alt="plus icon" />
                        <S.HeaderParagraph onClick={() => navigate("/new-address")}>Add Address</S.HeaderParagraph>
                    </S.AddAddressDiv>
                </S.SelectAddressHeader>
                <S.Separator></S.Separator>
                <S.SelectAddressContent>
                    <AddressCard />
                    {/* <AddressCard /> */}
                </S.SelectAddressContent>
                <S.ButtonDiv>
                    <S.Btn>Deliver Here</S.Btn>
                </S.ButtonDiv>
            </S.SelectAddressContainer>
        </>
    )
}