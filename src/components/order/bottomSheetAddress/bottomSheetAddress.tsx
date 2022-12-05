import * as S from "./bottomSheetAddressStyle"
import plus from "@/assets/imgs/order/plus.svg"
import AddressCard from "./addressCard/addressCard"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAddress } from "../../../products/address"
type Props = {
    state: boolean
    setState: (state: boolean) => void
}


export default function BottomSheetAddress({ state, setState }: Props) {
    const navigate = useNavigate()
    const [addressList, setAddressList] = useState([{
        _id: "",
        streetAddress: "",
        city: "",
        uf: "",
        pinCode: 0,
    }])

    useEffect(() => {
        getAddress().then((res) => setAddressList(res))
    }, [])
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
                    {addressList.map((item) => (
                        <AddressCard streetAddress={item.streetAddress} city={item.city} uf={item.uf} pinCode={item.pinCode} />
                    ))}
                </S.SelectAddressContent>
                <S.ButtonDiv>
                    <S.Btn>Deliver Here</S.Btn>
                </S.ButtonDiv>
            </S.SelectAddressContainer>
        </>
    )
}