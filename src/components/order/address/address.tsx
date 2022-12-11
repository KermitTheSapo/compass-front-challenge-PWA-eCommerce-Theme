import * as S from "./addressStyle"
import pencilBtn from "@/assets/imgs/order/pencil-btn.svg"
import { useEffect, useState } from "react";
import { getAddress } from "../../../products/address";
import { getContact } from "../../../products/contact";

type Props = {
    state: boolean;
    setState: (state: boolean) => void;
}

export default function Address({ state, setState }: Props) {
    const [address, setAddress] = useState({
        pinCode: 0,
        streetAddress: "",
        city: "",
        uf: "",
    })
    const [contact, setContact] = useState({
        firstName: "",
        LastName: ""
    })
    useEffect(() => {
        getAddress().then(res => setAddress(res[res.length - 1]))
        getContact().then(res => setContact(res[res.length - 1]))
    }, [])
    return (
        <S.AddressDiv>
            <S.AddressTitle>Deliver To</S.AddressTitle>
            <S.AddressInfo>
                <S.AddressContent>
                    <S.AddressInfoTitle>{`${contact.firstName === "" ? "unknown" : contact.firstName} ${contact.LastName === "" ? "" : contact.LastName}`}</S.AddressInfoTitle>
                    <S.AddressInfoDescription>{address.streetAddress}</S.AddressInfoDescription>
                </S.AddressContent>
                <S.AddressEditBtn onClick={() => setState(!state)} src={pencilBtn} alt="icon of a pencil" />
            </S.AddressInfo>
        </S.AddressDiv>
    )
}