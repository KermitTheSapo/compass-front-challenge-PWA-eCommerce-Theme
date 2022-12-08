import * as S from "./addressCardStyle"
type Props = {
    streetAddress: string;
    city: string;
    uf: string;
    pinCode: Number;
}
export default function AddressCard({ streetAddress, city, uf, pinCode }: Props) {
    return (
        <S.AddressCardContainer>
            <S.CardContent>
                <S.InputRadio type="radio" name="address" id="home" />
                <S.Label htmlFor="home">
                    <S.AddressCardName>Vincent Lobo</S.AddressCardName>
                    <S.AddressCardAddress>{streetAddress}</S.AddressCardAddress>
                    <S.AddressCardCity>{city} - {uf}</S.AddressCardCity>
                    <S.AddressCardPhone>{`${pinCode}`}</S.AddressCardPhone>
                </S.Label>
            </S.CardContent>
            <S.EditAddress>Edit</S.EditAddress>
        </S.AddressCardContainer>
    )
}