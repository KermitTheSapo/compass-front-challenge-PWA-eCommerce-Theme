import * as S from "./addressStyle"
import arrowBack from "@/assets/imgs/bag/back.svg"
import address from "@/assets/imgs/address/art.svg"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import AddressCard from "../../components/order/bottomSheetAddress/addressCard/addressCard"
import { useEffect, useState } from "react"
import { getAddress } from "../../products/address"

export default function Address() {
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
        <S.ConfirmedContainer>
            <Helmet>
                <title>Coral'l | Address</title>
            </Helmet>
            <S.ConfirmedHeader>
                <S.ImgBack src={arrowBack} alt="an arrow to the left" onClick={() => navigate(-1)} />
                <S.ConfirmedTitle>My Address Book</S.ConfirmedTitle>
            </S.ConfirmedHeader>
            {
                addressList.length < 0 ? <S.ConfirmedAdvise>
                    <S.ImgConfirmed src={address} alt="icon of a location point with a circle indicating error" />
                    <S.ConfirmedAdviseTitle>No Address</S.ConfirmedAdviseTitle>
                    <S.ConfirmedAdviseText>It seems you have not updated your address yet.</S.ConfirmedAdviseText>
                </S.ConfirmedAdvise> : <S.AddressList>
                    {addressList.map((item) => (
                        <AddressCard streetAddress={item.streetAddress} city={item.city} uf={item.uf} pinCode={item.pinCode} />
                    ))}
                </S.AddressList>
            }
            <S.BtnActionsDiv>
                <S.btnContinue onClick={() => navigate("/new-address")}>Add Address</S.btnContinue>
            </S.BtnActionsDiv>
        </S.ConfirmedContainer>
    )
}