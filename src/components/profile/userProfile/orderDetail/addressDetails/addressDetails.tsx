import * as S from "./addressDetailsStyle"

type Props = {
    pinCode: number;
    streetAddress: string;
    city: string;
    name: string;
}
export default function AddressDetails({ pinCode, streetAddress, city, name }: Props) {
    return (
        <S.AddressDetailsContainer>
            <S.AddressDetailsTitle>Address Details</S.AddressDetailsTitle>
            <S.AddressDetailsContent>
                <S.AddressDetailsLabel>{name}</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>{streetAddress}</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>{city}</S.AddressDetailsLabel>
                <S.AddressDetailsLabel>{`${pinCode}`}</S.AddressDetailsLabel>
            </S.AddressDetailsContent>
        </S.AddressDetailsContainer>
    )
}