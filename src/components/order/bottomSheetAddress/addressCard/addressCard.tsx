import { getContact } from "../../../../products/contact";
import { useEffect, useState } from "react";
import * as S from "./addressCardStyle"
type Props = {
    streetAddress: string;
    city: string;
    uf: string;
    pinCode: Number;
}
export default function AddressCard({ streetAddress, city, uf, pinCode }: Props) {
    const [contact, setContact] = useState({
        firstName: "",
        LastName: ""
    })
    useEffect(() => {
        getContact().then(res => setContact(res[res.length - 1]))
    }, [])
    return (
        <S.AddressCardContainer>
            <S.CardContent>
                <S.InputRadio type="radio" name="address" id="home" />
                <S.Label htmlFor="home">
                    <S.AddressCardName>{`${contact.firstName === "" ? "unknown" : contact.firstName} ${contact.LastName === "" ? "" : contact.LastName}`}</S.AddressCardName>
                    <S.AddressCardAddress>{streetAddress}</S.AddressCardAddress>
                    <S.AddressCardCity>{city} - {uf}</S.AddressCardCity>
                    <S.AddressCardPhone>{`${pinCode}`}</S.AddressCardPhone>
                </S.Label>
            </S.CardContent>
            <S.EditAddress>Edit</S.EditAddress>
        </S.AddressCardContainer>
    )
}